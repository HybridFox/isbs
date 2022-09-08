import { Module } from '@nestjs/common';
import { config } from '~config/config.const';
import { configValidationPreset } from '~config/config.preset';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoreModule } from '~modules/core/core.module';
import { MqttModule } from '~modules/mqtt/mqtt.module';
import { WebsocketModule } from '~modules/websocket/websocket.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: true,
			isGlobal: true,
			load: [config],
			validationOptions: configValidationPreset.options,
			validationSchema: configValidationPreset.schema,
		}),
		CoreModule,
		MqttModule,
		WebsocketModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
