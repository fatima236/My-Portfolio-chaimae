
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My-Portfolio/',
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
    'index.csr.html': {size: 1932, hash: '58620490a28b34ba8e801a766d8bfdc1174579dbdf9a581cc61a6647f4ea1219', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2400, hash: '8dc3011155f50763e631997fa20dbf6b5e3b19c58b482cca41828fdef90a7b11', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57334, hash: '2f1b8868d0bcf7b46e6825092751aa39a8316a319f163829055b8f54247ee6fe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PKANYXH2.css': {size: 46, hash: 'AAKvqYnWG2M', text: () => import('./assets-chunks/styles-PKANYXH2_css.mjs').then(m => m.default)}
  },
};
