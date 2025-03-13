
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My-Portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1931, hash: '57ddb951425c320d7482a241bc2066d4f49f3bc705ba9d1cc69cebb681e06035', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2399, hash: '65e080faf5692a6cdeb938036fd9d5268b6c6864722d779155c3a94d1868dbe9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55329, hash: 'ba223cd1cda8e707c8903cddf59fed30410cee15734cf7b32ce3e877f1c41260', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PKANYXH2.css': {size: 46, hash: 'AAKvqYnWG2M', text: () => import('./assets-chunks/styles-PKANYXH2_css.mjs').then(m => m.default)}
  },
};
