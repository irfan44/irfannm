import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Items = {
  [key: string]: string;
};

export class PostHandler {
  static postsDirectory = join(process.cwd(), 'contents');

  static getPostSlugs() {
    return fs.readdirSync(this.postsDirectory);
  }

  static getPostBySlug(slug: string, fields: string[] = []): Items {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(this.postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Items = {};

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }

      if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    return items;
  }

  static getAllPosts(fields: string[] = []) {
    const slugs = this.getPostSlugs();
    const posts = slugs
      .map((slug) => this.getPostBySlug(slug, fields))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  }
}