import PostCard from 'components/blog/PostCard';
import { PostsModel } from 'lib/models/post';

type Props = {
  posts: PostsModel;
};

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 gap-y-8">
      {posts.map((post) => (
        <PostCard
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
  );
};

export default PostList;
