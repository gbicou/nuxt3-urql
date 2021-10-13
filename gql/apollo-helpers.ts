import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ContinentKeySpecifier = ('code' | 'countries' | 'name' | ContinentKeySpecifier)[];
export type ContinentFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('capital' | 'code' | 'continent' | 'currency' | 'emoji' | 'emojiU' | 'languages' | 'name' | 'native' | 'phone' | 'states' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	capital?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	continent?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	emoji?: FieldPolicy<any> | FieldReadFunction<any>,
	emojiU?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	states?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageKeySpecifier = ('code' | 'name' | 'native' | 'rtl' | LanguageKeySpecifier)[];
export type LanguageFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	rtl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('continent' | 'continents' | 'countries' | 'country' | 'language' | 'languages' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	continent?: FieldPolicy<any> | FieldReadFunction<any>,
	continents?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StateKeySpecifier = ('code' | 'country' | 'name' | StateKeySpecifier)[];
export type StateFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Continent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContinentKeySpecifier | (() => undefined | ContinentKeySpecifier),
		fields?: ContinentFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	Language?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageKeySpecifier | (() => undefined | LanguageKeySpecifier),
		fields?: LanguageFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	State?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StateKeySpecifier | (() => undefined | StateKeySpecifier),
		fields?: StateFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;