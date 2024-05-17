import { getStory } from './stories';
import minimist from 'minimist';
import { Router } from './router';

// @ts-ignore
import mainJs from '../out/client.js.txt';
// @ts-ignore
import indexHtml from '../out/index.html.txt';
// @ts-ignore
import bootstrapCss from '../out/bootstrap-min.css.txt';

const CLIENT_TARGET = '/client.js';

// extract command line arguments
const argv = minimist(Bun.argv.slice(2));
if (!argv._[0]) {
  console.error('usage: momo <SOURCE_PATH>');
  process.exit(1);
}
const sourcePath = argv._[0];

// setup request handlers

const router = new Router();

// configure GET /
const contentWithReactScript = indexHtml
  .replace(
    '<!-- react-script -->',
    `<script type="module" src="${CLIENT_TARGET}"></script>`
  )
  .replace('<!-- bootstrap -->', `<style>${bootstrapCss}</style>`);
router.get('/', async (req) => {
  return new Response(contentWithReactScript, {
    headers: { 'Content-Type': 'text/html' },
  });
});

// configure GET ${CLIENT_TARGET} i.e. client-side JavaScript
router.get(CLIENT_TARGET, async (req) => {
  return new Response(mainJs, {
    headers: { 'Content-Type': 'text/javascript' },
  });
});

// configure GET /story
router.get('/story', (req) => {
  const story = getStory(sourcePath);
  return Response.json({ story });
});

// start server
const port = 3000;
Bun.serve({
  port: port,
  fetch: router.handle.bind(router),
});
console.info(`Listening on http://localhost:${port} ...`);
