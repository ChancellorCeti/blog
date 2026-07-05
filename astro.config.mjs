import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";
// https://astro.build/config
export default defineConfig({
  integrations: [
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
  output: "static",
    site: 'https://ceti.kaush.com'
});
