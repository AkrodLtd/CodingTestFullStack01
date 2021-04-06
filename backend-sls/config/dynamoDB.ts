import { isLocal } from './isLocal';

const dynamoDBConfig = {
  local: {
    env: {
      region: 'localhost',
      endpoint: 'http://localhost:8000',
      accessKeyId: 'DEFAULT_ACCESS_KEY',
      secretAccessKey: 'DEFAULT_SECRET'
    },
    tables: {
      watchListsTable: 'watchListsTable',
      moviesTable: 'moviesTable'
    }
  },
  aws: {
    env: {
      region: process.env.AWS_REGION,
      tableName: process.env.DYNAMODB_CACHE_TABLE,
      convertEmptyValues: true,
    },
    tables: {
      watchListsTable: 'watchListsTable',
      moviesTable: 'moviesTable'
    }
  }
}

export function getDynamoDbConfig() {
  const env = !isLocal ? 'aws' : 'local';

  return dynamoDBConfig[env];
}