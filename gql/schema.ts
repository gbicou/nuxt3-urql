import { cacheExchange } from '@urql/exchange-graphcache';
import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver } from '@urql/exchange-graphcache';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: never; output: never; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Continent?: (data: WithTypename<Continent>) => null | string,
  Country?: (data: WithTypename<Country>) => null | string,
  Language?: (data: WithTypename<Language>) => null | string,
  State?: (data: WithTypename<State>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    continent?: GraphCacheResolver<WithTypename<Query>, QueryContinentArgs, WithTypename<Continent> | string>,
    continents?: GraphCacheResolver<WithTypename<Query>, QueryContinentsArgs, Array<WithTypename<Continent> | string>>,
    countries?: GraphCacheResolver<WithTypename<Query>, QueryCountriesArgs, Array<WithTypename<Country> | string>>,
    country?: GraphCacheResolver<WithTypename<Query>, QueryCountryArgs, WithTypename<Country> | string>,
    language?: GraphCacheResolver<WithTypename<Query>, QueryLanguageArgs, WithTypename<Language> | string>,
    languages?: GraphCacheResolver<WithTypename<Query>, QueryLanguagesArgs, Array<WithTypename<Language> | string>>
  },
  Continent?: {
    code?: GraphCacheResolver<WithTypename<Continent>, Record<string, never>, Scalars['ID'] | string>,
    countries?: GraphCacheResolver<WithTypename<Continent>, Record<string, never>, Array<WithTypename<Country> | string>>,
    name?: GraphCacheResolver<WithTypename<Continent>, Record<string, never>, Scalars['String'] | string>
  },
  Country?: {
    capital?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    code?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['ID'] | string>,
    continent?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, WithTypename<Continent> | string>,
    currency?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    emoji?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    emojiU?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    languages?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Array<WithTypename<Language> | string>>,
    name?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    native?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    phone?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    states?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Array<WithTypename<State> | string>>
  },
  Language?: {
    code?: GraphCacheResolver<WithTypename<Language>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Language>, Record<string, never>, Scalars['String'] | string>,
    native?: GraphCacheResolver<WithTypename<Language>, Record<string, never>, Scalars['String'] | string>,
    rtl?: GraphCacheResolver<WithTypename<Language>, Record<string, never>, Scalars['Boolean'] | string>
  },
  State?: {
    code?: GraphCacheResolver<WithTypename<State>, Record<string, never>, Scalars['String'] | string>,
    country?: GraphCacheResolver<WithTypename<State>, Record<string, never>, WithTypename<Country> | string>,
    name?: GraphCacheResolver<WithTypename<State>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {};

export type GraphCacheUpdaters = {
  Query?: {
    continent?: GraphCacheUpdateResolver<{ continent: Maybe<WithTypename<Continent>> }, QueryContinentArgs>,
    continents?: GraphCacheUpdateResolver<{ continents: Array<WithTypename<Continent>> }, QueryContinentsArgs>,
    countries?: GraphCacheUpdateResolver<{ countries: Array<WithTypename<Country>> }, QueryCountriesArgs>,
    country?: GraphCacheUpdateResolver<{ country: Maybe<WithTypename<Country>> }, QueryCountryArgs>,
    language?: GraphCacheUpdateResolver<{ language: Maybe<WithTypename<Language>> }, QueryLanguageArgs>,
    languages?: GraphCacheUpdateResolver<{ languages: Array<WithTypename<Language>> }, QueryLanguagesArgs>
  },
  Mutation?: {},
  Subscription?: {},
  Continent?: {
    code?: GraphCacheUpdateResolver<Maybe<WithTypename<Continent>>, Record<string, never>>,
    countries?: GraphCacheUpdateResolver<Maybe<WithTypename<Continent>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<Continent>>, Record<string, never>>
  },
  Country?: {
    capital?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    code?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    continent?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    currency?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    emoji?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    emojiU?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    languages?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    native?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    phone?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>,
    states?: GraphCacheUpdateResolver<Maybe<WithTypename<Country>>, Record<string, never>>
  },
  Language?: {
    code?: GraphCacheUpdateResolver<Maybe<WithTypename<Language>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<Language>>, Record<string, never>>,
    native?: GraphCacheUpdateResolver<Maybe<WithTypename<Language>>, Record<string, never>>,
    rtl?: GraphCacheUpdateResolver<Maybe<WithTypename<Language>>, Record<string, never>>
  },
  State?: {
    code?: GraphCacheUpdateResolver<Maybe<WithTypename<State>>, Record<string, never>>,
    country?: GraphCacheUpdateResolver<Maybe<WithTypename<State>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<State>>, Record<string, never>>
  },
};

export type GraphCacheConfig = Parameters<typeof cacheExchange>[0] & {
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
};