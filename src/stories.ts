// TODO clean
import * as fs from 'fs';
import * as path from 'path';
import { unified } from 'unified';
import { VFile } from 'vfile';
import type { Data } from 'vfile';
import remarkParse from 'remark-parse';
import frontmatterExtract from 'remark-extract-frontmatter';
import frontmatter from 'remark-frontmatter';
import yaml from 'yaml';
import remarkDirective from 'remark-directive';
import remarkBreaks from 'remark-breaks';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import type { Root } from 'mdast';

// TODO define Story type

export function getStory(sourcePath: string) {
  const markdown = readMarkdown(sourcePath);
  const story = markdown.data;
  story.content = markdown.result;
  return story;
}

// TODO make this testable

function readMarkdown(path: string) {
  const text = fs.readFileSync(path, 'utf8');
  const input = new VFile(text);
  const output = unified()
    .use(remarkParse)
    .use([frontmatter, [frontmatterExtract, { yaml: yaml.parse }]])
    .use(remarkBreaks)
    .use([remarkDirective, htmlDirective])
    .use(jsonCompiler)
    .processSync(input);
  return output;
}

export function processMarkdown(text: string) {
  const input = new VFile(text);
  const output = unified()
    .use(remarkParse)
    .use([frontmatter, [frontmatterExtract, { yaml: yaml.parse }]])
    .use(remarkBreaks)
    .use([remarkDirective, htmlDirective])
    .use(jsonCompiler)
    .processSync(input);
  return output;
}

function jsonCompiler(this: any) {
  Object.assign(this, { Compiler: (tree: Root) => tree });
}

// convert directives into HTML elements
// TODO better type annotation or make this JS
function htmlDirective() {
  return (tree: Root) => {
    visit(
      tree,
      ['textDirective', 'leafDirective', 'containerDirective'],
      (node) => {
        const data = node.data || {};
        const hast = h(node.name, node.attributes);

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    );
  };
}
