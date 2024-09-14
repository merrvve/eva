import { b as createAstro, c as createComponent } from '../chunks/astro/server_raLFIa-r.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://evamerve.netlify.app");
const prerender = false;
const $$Hypersensitive = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hypersensitive;
  return Astro2.redirect("https://hypersensitive.eva.town", 308);
}, "C:/Users/mervs/OneDrive/Belgeler/astro/evadeneme/src/pages/hypersensitive.astro", void 0);

const $$file = "C:/Users/mervs/OneDrive/Belgeler/astro/evadeneme/src/pages/hypersensitive.astro";
const $$url = "/hypersensitive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Hypersensitive,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
