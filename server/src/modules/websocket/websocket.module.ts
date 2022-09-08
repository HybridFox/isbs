import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UnityWebsocketGateway } from './gateways/socket.gateway';
import { SetSolarOutputHandler } from './handlers/set-solar-output.handler';
import { SocketService } from './services/socket.service';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [UnityWebsocketGateway, SocketService, SetSolarOutputHandler],
})
export class WebsocketModule {}
