
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
    'index.csr.html': {size: 1922, hash: '1abea1f0ba392b0115ca596be267d7bcfb0e57ecc1e778c0d281b35032d9625a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2399, hash: '32e57ce40bc6a5c41bf4b11ab985a9735157e51cc9262ece0c096ee7fd552b42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55320, hash: '38b97f6cf0f1181deabf1eeb5f9c2d11e0d505b364189d81175e7a90ceb4ea81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-O43HM2GX.css': {size: 37, hash: 'I6+uRiZIKy4', text: () => import('./assets-chunks/styles-O43HM2GX_css.mjs').then(m => m.default)}
  },
};
