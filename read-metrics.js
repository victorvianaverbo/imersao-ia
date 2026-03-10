const fs = require('fs');
const d = JSON.parse(fs.readFileSync('./lighthouse-desktop-antes.json', 'utf8'));
const m = JSON.parse(fs.readFileSync('./lighthouse-mobile-antes.json', 'utf8'));
const fmt = (r, label) => { const c = r.categories.performance.score * 100; const a = r.audits; return label + ': ' + c.toFixed(0) + ' | LCP: ' + a['largest-contentful-paint'].displayValue + ' | TBT: ' + a['total-blocking-time'].displayValue + ' | CLS: ' + a['cumulative-layout-shift'].displayValue + ' | FCP: ' + a['first-contentful-paint'].displayValue };
console.log(fmt(d, 'DESKTOP'));
console.log(fmt(m, 'MOBILE'));
