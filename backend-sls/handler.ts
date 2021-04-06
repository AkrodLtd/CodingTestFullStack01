'use strict';
import * as AWS from 'aws-sdk';
import { getDynamoDbConfig } from './config/dynamoDB';

const docClient = new AWS.DynamoDB.DocumentClient(getDynamoDbConfig().env);

exports.hello = async (event) => {
  const body = JSON.parse(event.body);

  const params = {
    Item: {
      watchlist_name: body.watchlist_name,
    },
    TableName: getDynamoDbConfig().tables.watchListsTable
  }

  console.log(getDynamoDbConfig().env);

  const data = await docClient.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      data,
      null,
      2
    ),
  };
};
