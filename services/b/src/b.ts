import { APIGatewayProxyHandler } from 'aws-lambda';
import greeter from '../../../src';
import data from '../data.yml';

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log(JSON.stringify(event, null, 2));

  console.log('lib says:', greeter())
  console.log('data:', JSON.stringify(data));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from b',
    }),
  };
};
