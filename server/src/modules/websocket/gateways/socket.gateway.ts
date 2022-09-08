import { CommandBus } from '@nestjs/cqrs';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';
import { SetTimeCommand } from '~shared/commands/set-time.command';
import { SetWeatherCommand } from '~shared/commands/set-weather.command';
import { SocketService } from '../services/socket.service';

@WebSocketGateway()
export class UnityWebsocketGateway implements OnGatewayInit{
	@WebSocketServer()
	public server: Server;

	constructor(
		private commandBus: CommandBus,
		private socketService: SocketService
	) {}

	@SubscribeMessage('set_time')
	onSetTime(_: unknown, time: string) {
		this.commandBus.execute(new SetTimeCommand(time));
	}

	@SubscribeMessage('set_weather')
	onSetWeather(_: unknown, weather: string) {
		this.commandBus.execute(new SetWeatherCommand(weather));
	}

	afterInit(server: Server) {
		this.socketService.socket = server;
	}
}
