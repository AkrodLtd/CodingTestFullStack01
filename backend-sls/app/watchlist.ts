'use strict';
import * as AWS from 'aws-sdk';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import { getDynamoDbConfig } from '../config/dynamoDB';

const docClient = new AWS.DynamoDB.DocumentClient(getDynamoDbConfig().env);

exports.create = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body);

  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    Item: {
      watchlist_name: body.watchlist_name,
      watchlist_key: uuidv4()
    },
    TableName: getDynamoDbConfig().tables.watchListsTable
  };

  const data = await docClient.put(params).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        'watchlist_key': params.Item.watchlist_key,
        'watchlist_name': params.Item.watchlist_name
      },
      null,
      2
    ),
  };
};

exports.list = async (event: APIGatewayProxyEvent) => {
  const params: AWS.DynamoDB.DocumentClient.ScanInput = {
    TableName: getDynamoDbConfig().tables.watchListsTable,
    Select: 'ALL_ATTRIBUTES'
  };

  const watchLists = await docClient.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      watchLists.Items,
      null,
      2
    ),
  };
}
