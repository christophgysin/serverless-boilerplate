import data from '../data.yml';
import greeter from '../../../src';

export const handler = async (event: any) => {
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
