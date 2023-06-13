import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [["rehype-katex", {
      // Katex plugin options
    }]]
  },
  output: "server",
  adapter: vercel()
});