/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreateDHT = /* GraphQL */ `
  query GetCreateDHT($id: ID!) {
    getCreateDHT(id: $id) {
      id
      dhtID
      dhtTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCreateDHTS = /* GraphQL */ `
  query ListCreateDHTS(
    $filter: ModelCreateDHTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreateDHTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dhtID
        dhtTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCreateDHTS = /* GraphQL */ `
  query SyncCreateDHTS(
    $filter: ModelCreateDHTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreateDHTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dhtID
        dhtTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCreateLamp = /* GraphQL */ `
  query GetCreateLamp($id: ID!) {
    getCreateLamp(id: $id) {
      id
      lampID
      lampTitle
      red
      green
      blue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCreateLamps = /* GraphQL */ `
  query ListCreateLamps(
    $filter: ModelCreateLampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreateLamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lampID
        lampTitle
        red
        green
        blue
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCreateLamps = /* GraphQL */ `
  query SyncCreateLamps(
    $filter: ModelCreateLampFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreateLamps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        lampID
        lampTitle
        red
        green
        blue
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
