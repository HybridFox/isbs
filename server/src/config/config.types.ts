export enum Environment {
	local = 'local',
	test = 'test',
	development = 'development',
	acceptance = 'acceptance',
	production = 'production',
}

export interface IStateConfig {
	env: Environment;
	docs: boolean;
	production: boolean;
	test: boolean;
	debug: boolean;
}

export interface IServerConfig {
	host: string;
	port: number;
	timezone: string;
}

export interface IServicesMQTTConfig {
	url: string
}

export interface IServicesConfig {
	mqtt: IServicesMQTTConfig;
}

export interface IConfig {
	state: IStateConfig;
	server: IServerConfig;
	services: IServicesConfig;
}
