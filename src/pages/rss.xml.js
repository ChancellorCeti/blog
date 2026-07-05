import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Chancellor Ceti's Blog",
    description: "Chancellor Ceti's blog on physics, math, coding, film, literature, politics, and history—plus whatever else inspires him",
    site: context.site,
    items: blog.map((post) => ({
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(md.render(post.body), {
        allowedTags: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'br',
          'hr',
          'blockquote',
          'pre',
          'code',
          'ul',
          'ol',
          'li',
          'strong',
          'em',
          'b',
          'i',
          'a',
          'img',
          'table',
          'thead',
          'tbody',
          'tr',
          'th',
          'td'
        ],

        allowedAttributes: {
          a: ['href', 'title'],
          img: ['src', 'alt', 'title'],
        },

        allowedSchemes: ['http', 'https', 'mailto'],

        disallowedTagsMode: 'discard',

        allowedClasses: {},
        allowedStyles: {},

        transformTags: {
          a: sanitizeHtml.simpleTransform('a', {
            target: '_blank',
            rel: 'noopener noreferrer'
          })
        }
      }),
      ...post.data,
    })),
  });
}
