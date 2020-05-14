import { APIGatewayProxyHandler } from 'aws-lambda';
import greeter from '../../../src';

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log(JSON.stringify(event, null, 2));

  console.log('lib says:', greeter())

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from a',
    }),
  };
};
