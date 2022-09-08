import Env from '@studiohyperdrive/env';

import { IConfig, Environment } from './config.types';

export const config = (): IConfig => ({
	state: {
		env: Env.get('NODE_ENV') as Environment,
		docs: Env.getAsBoolean('STATE_DOCS'),
		production: Env.getAsBoolean('STATE_PRODUCTION'),
		test: Env.getAsBoolean('STATE_TEST'),
		debug: Env.getAsBoolean('STATE_DEBUG'),
	},
	server: {
		host: Env.get('HOST'),
		port: Env.getAsNumber('PORT'),
		timezone: Env.get('TZ'),
	},
	services: {
		mqtt: {
			url: process.env.MQTT_URL
		},
	},
});
