const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'kohost', 'dist');
const destDir = path.join(__dirname, 'app');

function convertHtmlToJsx(html) {
    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : html;

    // Remove script tags at the bottom (we will load them in layout.js)
    body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Replace class with className
    body = body.replace(/class=/g, 'className=');
    
    // Replace for with htmlFor
    body = body.replace(/for=/g, 'htmlFor=');

    // Fix inline styles (specifically the one we added)
    body = body.replace(/style="max-width: 160px;"/g, "style={{ maxWidth: '160px' }}");
    body = body.replace(/style="display: none;"/g, "style={{ display: 'none' }}");
    body = body.replace(/style="background: url\('([^']+)'\).*?"/g, "style={{ background: 'url($1)' }}");
    body = body.replace(/style="([^"]*)"/g, ""); // Strip any remaining unhandled inline styles to prevent React errors

    // Fix self-closing tags
    body = body.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />');
    body = body.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
    body = body.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');
    body = body.replace(/<br([^>]*?)(?<!\/)>/gi, '<br$1 />');
    body = body.replace(/<meta([^>]*?)(?<!\/)>/gi, '<meta$1 />');
    body = body.replace(/<link([^>]*?)(?<!\/)>/gi, '<link$1 />');

    // Strip HTML comments
    body = body.replace(/<!--[\s\S]*?-->/g, '');

    // Replace href="something.html" with href="/something"
    body = body.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
    body = body.replace(/href="index"/g, 'href="/"');

    return body;
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const html = fs.readFileSync(path.join(srcDir, file), 'utf8');
    const jsxContent = convertHtmlToJsx(html);
    
    let pageName = file.replace('.html', '');
    let dirPath = path.join(destDir, pageName);
    
    if (pageName === 'index') {
        dirPath = destDir;
    } else {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    }
    
    const pageComponent = `
export default function ${pageName.replace(/-/g, '')}Page() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

    fs.writeFileSync(path.join(dirPath, 'page.jsx'), pageComponent);
    console.log(`Converted ${file} to ${pageName === 'index' ? 'app/page.jsx' : `app/${pageName}/page.jsx`}`);
});
