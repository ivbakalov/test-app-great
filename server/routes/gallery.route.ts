import { ServerResponse } from 'http';
import { readFile } from 'fs';
import { join } from 'path';
import { serverError } from '../middleware/server-error.middleware';
import { galleryInterface } from '@great-shared/interfaces/gallery.interface';
import { pageInterval } from '../helpers/page-interval.helper';

export const gallery = (reqUrl: URL, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');

  readFile(join(process.cwd(), 'server', 'mock-data', 'gallery.json'), 'utf-8', (err: unknown, data: string) => {
    if (err) {
      console.log(err);

      serverError(res);

      return;
    }

    try {
      const parsedData: Array<galleryInterface> = JSON.parse(data);
      let updatedParsedData: Array<galleryInterface> | undefined;

      if (reqUrl.searchParams?.has('galleryPage')) {
        const page = Number(reqUrl.searchParams?.get('galleryPage'));

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
