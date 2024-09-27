import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DZ6PHCt5.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/concerts.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/education/_slug_.astro.mjs');
const _page5 = () => import('./pages/education.astro.mjs');
const _page6 = () => import('./pages/now.astro.mjs');
const _page7 = () => import('./pages/research/_slug_.astro.mjs');
const _page8 = () => import('./pages/research.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/sound-system.astro.mjs');
const _page11 = () => import('./pages/_slug_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/concerts.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/education/[slug].astro", _page4],
    ["src/pages/education/index.astro", _page5],
    ["src/pages/now.astro", _page6],
    ["src/pages/research/[slug].astro", _page7],
    ["src/pages/research/index.astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/sound-system.astro", _page10],
    ["src/pages/[slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9c78cb8a-682f-468c-a464-723295b66222"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
