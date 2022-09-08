import { Schema, ValidationOptions } from 'joi';

export interface IValidationPreset {
	schema: Schema;
	options: ValidationOptions;
}

// Caching
export const CACHE_HITS_KEY: string = 'cacheHits';
export const CACHE_MISSES_KEY: string = 'cacheMisses';

// Looker
export interface ILookerResponse {
	[key: string]: any;
}

export enum ELookerFields {
	// Dimensions
	COUNTRY_NAME_DE = 'refs_public_release.country_name_de',
	COUNTRY_NAME_FR = 'refs_public_release.country_name_fr',
	COUNTRY_NAME_NL = 'refs_public_release.country_name_nl',
	COUNTRY_NIS_CODE = 'refs_public_release.country_nis_code',
	GOOD_TYPE = 'refs_public_release.good_type',
	MUNICIPALITY_NAME_DE = 'refs_public_release.municipality_name_de',
	MUNICIPALITY_NAME_FR = 'refs_public_release.municipality_name_fr',
	MUNICIPALITY_NAME_NL = 'refs_public_release.municipality_name_nl',
	MUNICIPALITY_NIS_CODE = 'refs_public_release.municipality_nis_code',
	MUNICIPAL_SECTION_NAME_DE = 'refs_public_release.municipal_section_name_de',
	MUNICIPAL_SECTION_NAME_FR = 'refs_public_release.municipal_section_name_fr',
	MUNICIPAL_SECTION_NAME_NL = 'refs_public_release.municipal_section_name_nl',
	MUNICIPAL_SECTION_NIS_CODE = 'refs_public_release.municipal_section_nis_code',
	PROVINCE_NAME_DE = 'refs_public_release.province_name_de',
	PROVINCE_NAME_FR = 'refs_public_release.province_name_fr',
	PROVINCE_NAME_NL = 'refs_public_release.province_name_nl',
	PROVINCE_NIS_CODE = 'refs_public_release.province_nis_code',
	REGION_NAME_DE = 'refs_public_release.region_name_de',
	REGION_NAME_FR = 'refs_public_release.region_name_fr',
	REGION_NAME_NL = 'refs_public_release.region_name_nl',
	REGION_NIS_CODE = 'refs_public_release.region_nis_code',
	YEAR = 'refs_public_release.year',
	MUNICIPAL_SECTION_EXCLUDE_SEARCH = 'refs_public_release_base.trust_indicator_value_municipalsection_year_exclude_ind',
	// Measures
	AVG_SELLING_PRICE_GOOD = 'refs_public_release_base.avg_selling_price_good',
	MEDIAN_SELLING_PRICE_GOOD = 'refs_public_release_base.median_selling_price_good',
	TWENTY_FIFTH_PERCENTILE_SELLING_PRICE_GOOD = 'refs_public_release_base.selling_price_good_25th',
	SEVENTY_FIFTH_PERCENTILE_SELLING_PRICE_GOOD = 'refs_public_release_base.selling_price_good_75th',
	TRUST_INDICATOR_COUNTRY = 'refs_public_release_base.max_trust_indicator_country_year',
	TRUST_INDICATOR_MUNICIPALITY = 'refs_public_release_base.max_trust_indicator_municipality_year',
	TRUST_INDICATOR_MUNICIPALSECTION = 'refs_public_release_base.max_trust_indicator_municipalsection_year',
	TRUST_INDICATOR_PROVINCE = 'refs_public_release_base.max_trust_indicator_province_year',
	TRUST_INDICATOR_REGION = 'refs_public_release_base.max_trust_indicator_region_year',
}

// Common
export const AMOUNT_OF_PRICE_LEVELS: number = 9;

export enum ELocationTypes {
	Region = 'region',
	Province = 'province',
	Municipality = 'municipality',
	MunicipalSection = 'municipalSection',
}

export enum EGoodTypes {
	House = 'house',
	Apartment = 'apartment',
}

export interface INames {
	nameNL: string;
	nameFR: string;
	nameDE?: string;
}

export interface IName {
	nl: string;
	fr: string;
	de: string;
}
