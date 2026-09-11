// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
  {
    provider: fontProviders.local(),
    name: "Humane",
    cssVariable: "--font-humane",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Humane-Bold.woff2'],
        weight: 700,
        style: 'normal'
      }, {
        src: ['./src/assets/fonts/Humane-Medium.woff2'],
        weight: 500,
        style: 'normal'
      }
    ]
    }
  },
  {
    provider: fontProviders.fontsource(),
    name: "Roboto",
    cssVariable: "--font-body",
    weights: ["100 200 300 400 500 600 700 800 900"]
  },{
    provider: fontProviders.fontsource(),
    name: "Roboto Mono",
    cssVariable: "--font-mono",
    weights: ["400"],
  }
]
});


