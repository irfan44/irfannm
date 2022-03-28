import PostPreview from "./post-preview";
import Post from "../../types/post";
import Section from "../layouts/section";

type Props = {
  posts: Post[];
  title: string;
};

const PostsList = ({ posts, title }: Props) => {
  return (
    <Section title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-8 gap-y-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            category={post.category}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Section>
  );
};

export default PostsList;
