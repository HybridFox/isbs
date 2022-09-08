import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CommandBus } from "@nestjs/cqrs";
import { connect, MqttClient } from "mqtt"
import { SetSolarOutputCommand } from "~shared/commands/set-solar-output.command";

@Injectable()
export class MqttService {
	public client: MqttClient;

	constructor(
		private readonly configService: ConfigService,
		private readonly commandBus: CommandBus
	) {
		let parameters = {
			hour: 12,
			weather: 'sunny'
		};

		this.client = connect(this.configService.get('services.mqtt.url'));

		this.client.subscribe('unity/time')
		this.client.subscribe('unity/weather')
		this.client.subscribe('energyville/solar_output')

		this.client.on('message', (topic, message) => {
			if (topic === 'energyville/solar_output') {
				this.commandBus.execute(new SetSolarOutputCommand(Number(message.toString())))
			}
		});

		// EnergyVille Mock
		this.client.on('message', (topic, message) => {
			const parsedMessage = message.toString();

			if (topic === 'unity/time') {
				parameters = {
					...parameters,
					hour: Number(parsedMessage.split(':')[0])
				}
			}

			if (topic === 'unity/weather') {
				parameters = {
					...parameters,
					weather: parsedMessage
				}
			}
		});

		setInterval(() => {
			const output = ((Math.cos((parameters.hour / 24) * Math.PI) * -1) + 1) + (parameters.weather === 'sunny' ? 2 : 0.1);
			this.client.publish('energyville/solar_output', output.toString())
		}, 1000)
	}
}
