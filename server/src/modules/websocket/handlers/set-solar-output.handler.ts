import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SetSolarOutputCommand } from '~shared/commands/set-solar-output.command';
import { SocketService } from '../services/socket.service';

@CommandHandler(SetSolarOutputCommand)
export class SetSolarOutputHandler implements ICommandHandler<SetSolarOutputCommand> {
	constructor(private socketService: SocketService) {}

	async execute(command: SetSolarOutputCommand) {
		const { output } = command;

		console.log('!!!', output);

		this.socketService.socket.clients.forEach((client) => {
			client.send(JSON.stringify({
				event: 'set_solaroutput',
				data: output
			}))
		})
	}
}
