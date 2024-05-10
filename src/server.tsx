import { getStory } from './stories';
import minimist from 'minimist';
import { Router } from './router';

// TODO log

// extract command line arguments
const argv = minimist(Bun.argv.slice(2));
if (!argv._[0]) {
  console.error('usage: momo <SOURCE_PATH>');
  process.exit(1);
}
const sourcePath = argv._[0];

// setup request handlers

const INDEX_SOURCE = './src/client/index.html';
const CLIENT_TRAGET = '/client.js';
const CLIENT_SOURCE = './src/client/main.tsx';

const router = new Router();

router.get('/', async (req) => {
  const indexFile = Bun.file(INDEX_SOURCE);
  const indexContent = await indexFile.text();
  const contentWithReactScript = indexContent.replace(
    '<!-- react-script -->',
    `<script type="module" src="${CLIENT_TRAGET}"></script>`
  );
  return new Response(contentWithReactScript, {
    headers: { 'Content-Type': 'text/html' },
  });
});

router.get(CLIENT_TRAGET, async (req) => {
  const builds = await Bun.build({
    entrypoints: [CLIENT_SOURCE],
    target: 'browser',
    minify: {
      identifiers: true,
      syntax: true,
      whitespace: true,
    },
  });

  return new Response(builds.outputs[0].stream(), {
    headers: { 'Content-Type': builds.outputs[0].type },
  });
});

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
console.log(`Listening on http://localhost:${port} ...`);
