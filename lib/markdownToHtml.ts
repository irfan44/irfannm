import { remark } from "remark";
import mdx from "remark-mdx";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(mdx).processSync(markdown);
  return result.toString();
}
