import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SetWeatherCommand } from '~shared/commands/set-weather.command';
import { MqttService } from '../services/mqtt.service';

@CommandHandler(SetWeatherCommand)
export class SetWeatherHandler implements ICommandHandler<SetWeatherCommand> {
	constructor(private mqttService: MqttService) {}

	async execute(command: SetWeatherCommand) {
		const { weather } = command;

		this.mqttService.client.publish('unity/weather', weather)
	}
}
