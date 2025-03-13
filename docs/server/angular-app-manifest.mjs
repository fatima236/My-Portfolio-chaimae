
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My-Portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-Portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/My-Portfolio",
    "route": "/My-Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1931, hash: '1c9e3b2db6b1c5076269586bd8bd6fe0924e73bf0143fce3dad6808f9a8df110', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2399, hash: 'acb44c7f12784478d3c113787fe0a7a316517d5c98d9fdb646fa5193ff61680e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57333, hash: 'aa72eec29f0991539e63fcfa3568c15286e394f6a1d17caeb22e0759c4cde7a0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PKANYXH2.css': {size: 46, hash: 'AAKvqYnWG2M', text: () => import('./assets-chunks/styles-PKANYXH2_css.mjs').then(m => m.default)}
  },
};
