import { ValidationOptions } from 'joi';

export const allowUnknown: ValidationOptions = {
	abortEarly: false,
	allowUnknown: true,
	convert: true,
};

export const stripUnknown: ValidationOptions = {
	abortEarly: false,
	convert: true,
	stripUnknown: true,
};
