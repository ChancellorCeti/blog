import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: "Chancellor Ceti's Blog",
    description: "Chancellor Ceti's blog on physics, math, coding, film, literature, politics, and history—plus whatever else inspires him",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
