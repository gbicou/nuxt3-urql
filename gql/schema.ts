import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import type { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: never;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
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
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type WithTypename<T extends { __typename?: any }> = T & { __typename: NonNullable<T['__typename']> };

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

export type GraphCacheOptimisticUpdaters = {
  {}
};

export type GraphCacheUpdaters = {
  Mutation?: {},
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};