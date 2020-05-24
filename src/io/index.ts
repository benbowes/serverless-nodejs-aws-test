export default {
  handlers: {
    returnSuccess: (result: string) => ({
      statusCode: 200,
      body: JSON.stringify(result),
    }),
  },
};
