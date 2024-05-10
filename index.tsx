import ReactDOMServer from 'react-dom/server';
import { App } from './App';
import * as path from 'path';
import { getStory } from './lib/stories';

const indexFile = Bun.file('index.html');

if (!Bun.argv[2]) {
  process.exit(1);
}
const sourcePath = path.join(process.cwd(), Bun.argv[2]);
console.log(`argv: ${Bun.argv}`);
console.log(`sourcePath: ${sourcePath}`);

const server = Bun.serve({
  port: 3000,
  async fetch(req, server) {
    const { pathname } = new URL(req.url);

    // serve JS
    if (pathname === '/main.js' && req.method === 'GET') {
      // build
      const builds = await Bun.build({
        entrypoints: ['./main.tsx'],
        target: 'browser',
        minify: {
          identifiers: true,
          syntax: true,
          whitespace: true,
        },
        define: {
          FOO: 'foo',
          BAR: JSON.stringify({ foo: 'bar' }),
        },
      });

      return new Response(builds.outputs[0].stream(), {
        headers: { 'Content-Type': builds.outputs[0].type },
      });
    }

    // serve HTML
    if (pathname === '/' && req.method === 'GET') {
      const indexContent = await indexFile.text();
      const contentWithReactScript = indexContent.replace(
        '<!-- react-script -->',
        `<script type="module" src="/main.js"></script>`
      );
      return new Response(contentWithReactScript, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    // server story
    if (pathname === '/story' && req.method === 'GET') {
      console.log(sourcePath);
      const story = getStory(sourcePath);
      return Response.json({ story });
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
