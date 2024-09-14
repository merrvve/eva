import { b as createAstro, c as createComponent } from '../chunks/astro/server_raLFIa-r.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://evamerve.netlify.app");
const prerender = false;
const $$Composed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Composed;
  return Astro2.redirect("https://composed.eva.town", 308);
}, "C:/Users/mervs/OneDrive/Belgeler/astro/evadeneme/src/pages/composed.astro", void 0);

const $$file = "C:/Users/mervs/OneDrive/Belgeler/astro/evadeneme/src/pages/composed.astro";
const $$url = "/composed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Composed,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
