import * as http from 'http';

import { router } from './router';

import { gallery } from './routes/gallery.route';
import { posts } from './routes/posts.route';

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  router(req, res).get('/api/posts', posts);
  router(req, res).get('/api/gallery', gallery);
  // router(req, res).get('*', notFound);
});

server.on('error', (e) => {
  // Handle your error here
  console.log(e);
});

server.listen(+port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
