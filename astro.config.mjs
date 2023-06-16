import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
// https://astro.build/config
export default defineConfig({
  integrations: [
      svelte(),
      partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [["rehype-katex", {
      // Katex plugin options
    }]]
  },
  output: "server",
  adapter: vercel({
        analytics:true
  })
});
