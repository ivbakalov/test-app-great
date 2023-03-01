import { ServerResponse } from 'http';
import { readFile } from 'fs';
import { join } from 'path';
import { serverError } from '../middleware/server-error.middleware';
import { pageInterval } from '../helpers/page-interval.helper';
import { postsInterface } from '@great-shared/interfaces/posts.interface';

export const posts = (reqUrl: URL, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');

  readFile(join(process.cwd(), 'server', 'mock-data', 'posts.json'), 'utf-8', (err: unknown, data: string) => {
    if (err) {
      console.log(err);
      serverError(res);
    }

    try {
      const parsedData: Array<postsInterface> = JSON.parse(data);
      let updatedParsedData: Array<postsInterface> | undefined;

      if (reqUrl.searchParams?.has('page')) {
        const page = Number(reqUrl.searchParams?.get('page'));

        updatedParsedData = parsedData.slice(...pageInterval(page, parsedData.length));
      }

      res.end(JSON.stringify({ data: { data: updatedParsedData ? updatedParsedData : parsedData, pageTotal: parsedData.length } }));
    } catch (error) {
      console.log(err);

      serverError(res);

      return;
    }
  });

  return;
};
