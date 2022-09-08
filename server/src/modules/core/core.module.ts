import express, { Request, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import {
	INestApplication,
	Module,
	OnApplicationShutdown,
} from '@nestjs/common';

import { config } from '~config/config.const';
import { description, version } from '~pkg';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

/**
 * CoreModule containing core functionalities for the API
 * - Initialises MongoDB connection and caching
 * - Adds CacheItem and Primary tables to MongoDB
 */
@Module({
	controllers: [],
	providers: [],
	imports: [],
})
export class CoreModule implements OnApplicationShutdown {
	/**
	 * Application shutdown hook
	 * - Logs an application shutdown
	 */
	public onApplicationShutdown(): void {
		console.info('🔻 Server stopped, graceful shutdown');
	}

	/**
	 * Application global middleware
	 * - Adds body parsing
	 * - Adds compression
	 * - Adds security using helmet
	 * - Adds request logging using morgan
	 * @param app Nest.js application instance
	 */
	public static initGlobalMiddleware(app: INestApplication): void {
		app.use(express.urlencoded({ limit: '50mb', extended: true }));
		app.use(express.json({ limit: '50mb' }));

		app.use(compression());

		app.use(helmet.hidePoweredBy());
		app.use(helmet.ieNoOpen());
		app.use(helmet.noSniff());
		app.use(helmet.xssFilter());
	}

	/**
	 * Application Swagger middleware
	 * - Adds Swagger documentation on /docs and /docs-json endpoints
	 * @param app Nest.js application instance
	 */
	public static initSwagger(app: INestApplication): void {
		const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
			.setTitle('ISBS Swagger')
			.setDescription(description)
			.setVersion(version)
			.build();

		const document: OpenAPIObject = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('docs', app, document);
	}
}
