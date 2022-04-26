import PostCard from 'components/templates/Posts/PostsList/PostCard';
import Post from 'types/post';

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-8 gap-y-8">
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

export default PostsList;
