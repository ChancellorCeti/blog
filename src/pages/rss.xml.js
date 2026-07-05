import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('posts');
  return rss({
    title: 'Chancellor Ceti’s Blog',
    description: "Chancellor Ceti's blog on physics, math, coding, film, literature, politics, and history—plus whatever else inspires him",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
