import * as Types from '../schema';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllCountriesQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.CountryFilterInput>;
}>;


export type AllCountriesQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Types.Country, 'code' | 'name' | 'emoji'>
  )> }
);


export const AllCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCountries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"countries"},"name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<AllCountriesQuery, AllCountriesQueryVariables>;