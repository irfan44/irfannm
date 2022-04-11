import { MDXRemoteSerializeResult } from "next-mdx-remote";

type PostType = {
  slug: string;
  title: string;
  category: string;
  date: string;
  coverImage: string;
  caption: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: MDXRemoteSerializeResult;
};

export default PostType;
