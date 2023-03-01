import { IncomingMessage, ServerResponse } from 'http';

export const notFound = (_: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 404;
  res.end(JSON.stringify({ message: 'Not found' }));

  return;
};
