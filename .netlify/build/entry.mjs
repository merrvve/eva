import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_NxNqtcYn.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/composed.astro.mjs');
const _page3 = () => import('./pages/concerts.astro.mjs');
const _page4 = () => import('./pages/design.astro.mjs');
const _page5 = () => import('./pages/education/_slug_.astro.mjs');
const _page6 = () => import('./pages/education.astro.mjs');
const _page7 = () => import('./pages/garden.astro.mjs');
const _page8 = () => import('./pages/hypersensitive.astro.mjs');
const _page9 = () => import('./pages/now.astro.mjs');
const _page10 = () => import('./pages/posts/_slug_.astro.mjs');
const _page11 = () => import('./pages/research/2024/_slug_.astro.mjs');
const _page12 = () => import('./pages/research/_slug_.astro.mjs');
const _page13 = () => import('./pages/research.astro.mjs');
const _page14 = () => import('./pages/rss.xml.astro.mjs');
const _page15 = () => import('./pages/subscribe/almost.astro.mjs');
const _page16 = () => import('./pages/subscribe/success.astro.mjs');
const _page17 = () => import('./pages/subscribe.astro.mjs');
const _page18 = () => import('./pages/webrings.astro.mjs');
const _page19 = () => import('./pages/_slug_.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/composed.astro", _page2],
    ["src/pages/concerts.astro", _page3],
    ["src/pages/design.astro", _page4],
    ["src/pages/education/[slug].astro", _page5],
    ["src/pages/education/index.astro", _page6],
    ["src/pages/garden.astro", _page7],
    ["src/pages/hypersensitive.astro", _page8],
    ["src/pages/now.astro", _page9],
    ["src/pages/posts/[slug].astro", _page10],
    ["src/pages/research/2024/[slug].astro", _page11],
    ["src/pages/research/[slug].astro", _page12],
    ["src/pages/research/index.astro", _page13],
    ["src/pages/rss.xml.js", _page14],
    ["src/pages/subscribe/almost.astro", _page15],
    ["src/pages/subscribe/success.astro", _page16],
    ["src/pages/subscribe/index.astro", _page17],
    ["src/pages/webrings.astro", _page18],
    ["src/pages/[slug].astro", _page19],
    ["src/pages/index.astro", _page20]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4c18b881-ded9-4d23-84e8-e0ed0fac420e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
