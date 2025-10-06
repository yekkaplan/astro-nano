import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  let blog = [];
  try {
    blog = (await getCollection("blog"))
      .filter(post => !post.data.draft);
  } catch (e) {
    // Handle case where collection is empty
  }

  let projects = [];
  try {
    projects = (await getCollection("projects"))
      .filter(project => !project.data.draft);
  } catch (e) {
    // Handle case where collection is empty
  }

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}