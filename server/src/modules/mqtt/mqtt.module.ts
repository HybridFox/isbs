import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SetTimeHandler } from './handlers/set-time.handler';
import { SetWeatherHandler } from './handlers/set-weather.handler';
import { MqttService } from './services/mqtt.service';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [MqttService, SetTimeHandler, SetWeatherHandler],
})
export class MqttModule {}
