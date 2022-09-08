import Joi from 'joi';

import { IValidationPreset } from '~shared/shared.types';
import { allowUnknown } from '~shared/helpers/validation/options';

import { Environment } from './config.types';

export const configValidationPreset: IValidationPreset = {
	options: allowUnknown,
	schema: Joi.object().required().keys({
		NODE_ENV: Joi.string().required().valid(
			Environment.local,
			Environment.test,
			Environment.development,
			Environment.acceptance,
			Environment.production,
		),
		STATE_DOCS: Joi.boolean().default(false),
		STATE_PRODUCTION: Joi.boolean().default(false),
		STATE_TEST: Joi.boolean().default(false),
		STATE_DEBUG: Joi.boolean().default(false),
		HOST: Joi.string().required(),
		PORT: Joi.number().required(),
		TZ: Joi.string().required(),
	}),
};
