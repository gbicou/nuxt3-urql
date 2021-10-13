import type * as Types from '../schema';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllCountriesQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Types.Country, 'code' | 'name'>
  )> }
);


export const AllCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllCountriesQuery, AllCountriesQueryVariables>;