
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mon-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mon-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 513, hash: 'ee5e7c453dd14cad5a3eb9891719cbe317ff1902c57d79c1d8c5f353df385ba9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '9b7595d27aa58215cd1b147cf80fcea9a76770705364e4eaf5fd24db13570ec7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55658, hash: 'ab414ee487cb22dc91a83ec25b4e327d5a81ae7bb4efa2aaa978f6b99afcbace', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
