import * as AWS from 'aws-sdk';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getDynamoDbConfig } from '../config/dynamoDB';

const docClient = new AWS.DynamoDB.DocumentClient(getDynamoDbConfig().env);

exports.create = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body);

  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    Item: {
      movie: body.movie,
      watchlist_key:  body.watchlist_key,
      movie_id: body.movie.id.toString(),
    },
    TableName: getDynamoDbConfig().tables.moviesTable
  };

  const data = await docClient.put(params).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        movie: params.Item.movie,
        watchlist_key: params.Item.watchlist_key
      },
      null,
      2
    ),
  };
};

exports.delete = async(event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body);
  console.log(body.movie_id);
  const params: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: getDynamoDbConfig().tables.moviesTable,
    Key: {
      "movie_id": body.movie_id,
      "watchlist_key": body.watchlist_key
    }
  };

  await docClient.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        'message': 'Deleted Successfully'
      },
      null,
      2
    ),
  };
}

exports.list = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body);

  const params: AWS.DynamoDB.DocumentClient.ScanInput = body?.watchlist_key ? {
    TableName: getDynamoDbConfig().tables.moviesTable,
    Select: 'ALL_ATTRIBUTES',
    FilterExpression: '#key=:key',
    ExpressionAttributeNames: {
      '#key': 'watchlist_key'
    },
    ExpressionAttributeValues: {
      ':key': body.watchlist_key
    }
  } : {
    TableName: getDynamoDbConfig().tables.moviesTable,
    Select: 'ALL_ATTRIBUTES'
  };

  const moviesList = await docClient.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      moviesList.Items,
      null,
      2
    ),
  };
}