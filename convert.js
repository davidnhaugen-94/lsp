const fs = require('fs');
const { marked } = require('marked');

const files = [
  'intro',
  'data-handling-guides',
  'errors-and-troubleshooting',
  'getting-started-tutorial'
];

for (const name of files) {
  const markdown = fs.readFileSync(`docs/${name}.md`, 'utf8');
  const html = marked(markdown);

  fs.writeFileSync(
    `docs/${name}.html`,
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body>
${html}
</body>
</html>`
  );
}