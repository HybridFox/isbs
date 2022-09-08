import { Module } from '@nestjs/common';
import { config } from '~config/config.const';
import { configValidationPreset } from '~config/config.preset';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoreModule } from '~modules/core/core.module';
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
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
