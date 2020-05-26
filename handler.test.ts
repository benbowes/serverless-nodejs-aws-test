import { hello, goodbye } from './handler';

test('hello - success', async () => {
  const result = await hello(({ pathParameters: { name: 'Mr. Bob Dobalina' } }) as any, null, null);

  expect(result).toEqual({
    statusCode: 200,
    body: JSON.stringify('Hello Mr. Bob Dobalina')
  });
});

test('hello - fail', async () => {
  const result = await hello(({ pathParameters: {} }) as any, null, null);

  expect(result).toEqual({
    statusCode: 400,
    body: JSON.stringify('Bad Request')
  });
});

test('goodbye - success', async () => {
  const result = await goodbye(({ pathParameters: { name: 'Mr. Bob Dobalina' } }) as any, null, null);

  expect(result).toEqual({
    statusCode: 200,
    body: JSON.stringify('Goodbye Mr. Bob Dobalina')
  });
});

test('goodbye - fail', async () => {
  const result = await goodbye(({ pathParameters: {} }) as any, null, null);

  expect(result).toEqual({
    statusCode: 400,
    body: JSON.stringify('Bad Request')
  });
});