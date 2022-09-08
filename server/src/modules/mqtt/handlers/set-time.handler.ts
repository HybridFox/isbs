import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SetTimeCommand } from '~shared/commands/set-time.command';
import { MqttService } from '../services/mqtt.service';

@CommandHandler(SetTimeCommand)
export class SetTimeHandler implements ICommandHandler<SetTimeCommand> {
	constructor(private mqttService: MqttService) {}

	async execute(command: SetTimeCommand) {
		const { time } = command;

		this.mqttService.client.publish('unity/time', time)
	}
}
