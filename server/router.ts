import { notFound } from './routes/not-found.route';
import { IncomingMessage, ServerResponse } from 'http';

export const router = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url) {
    const reqUrl = new URL(req.url, 'http://127.0.0.1');

    return {
      get: (url: string, callback: any) => {
        if ((url === reqUrl.pathname || url === '*') && req.method === 'GET') {
          return callback(reqUrl, res);
        }
      },
    };
  }

  return {
    get() {
      return notFound(req, res);
    },
  };
};
