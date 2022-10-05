import { html, render } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const works = [
  {
    title: 'CyberPredator',
    desc: 'game | godot | jam | magarajam3',
    image: './images/cyber.png',
    hoverImage: './images/cyber.gif',
    link: 'https://github.com/cevherkarakoc/CyberPredator',
  },
  {
    title: 'Konn',
    desc: 'game | godot | jam | 2D Platformer Jam',
    image: './images/konn.png',
    hoverImage: './images/konn.gif',
    link: 'https://github.com/cevherkarakoc/Konn',

  },
  {
    title: 'Yaban',
    desc: 'Procedural Generation | JavaScript | p5.js',
    image: './images/yaban.png',
    hoverImage: './images/yaban.gif',
    link: 'https://github.com/cevherkarakoc/Yaban',

  },
  {
    title: 'ImageToAscii',
    desc: 'JavaScript | ASCII Art',
    image: './images/imagetoascii1.png',
    hoverImage: './images/imagetoascii2.png',
    link: 'https://github.com/cevherkarakoc/ImageToAscii',

  },
  {
    title: '2D Tunnel Shader',
    desc: 'WebGL | GLSL',
    image: './images/2dtunnelshader.png',
    hoverImage: './images/2dtunnelshader.gif',
    link: 'https://github.com/cevherkarakoc/2D-Tunnel-Shader',

  },
  {
    title: 'Speed-Reading',
    desc: 'JavaScript | React',
    image: './images/speedreading.png',
    hoverImage: './images/speedreading.gif',
    link: 'https://github.com/cevherkarakoc/Speed-Reading',
  },
]

const name = "world";

const workbox = (work) => html`<div class="group relative aspect-square text-white">
  <img class="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-all duration-500" src="${work.image}" />
  <img class="absolute top-0 left-0 w-full h-full brightness-75 opacity-0 group-hover:opacity-100 transition-all duration-500" src="${work.hoverImage}" />
  <div class="absolute w-full h-full hidden group-hover:flex  group-hover:opacity-100 items-end justify-center select-none top-0 left-0">
    <a href="${work.link}" target="_blank" class="bg-black/40 w-full py-2">
      <h2 class="text-center text-3xl text-slate-100">${work.title}</h2>
      <p class="text-center text-sm">${work.desc}</p>
    </a>
  </div>
</div>`

const app = html`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
  ${works.map(work => workbox(work))}
</div>`;


render(app, document.body);
