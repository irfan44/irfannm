import PostCard from 'components/blog/PostCard'
import type { PostsModel } from 'lib/models/post'

type Props = {
  posts: PostsModel
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-6 lg:gap-8">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          category={post.blogCategory.name}
          coverImage={post.coverImage.secure_url}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}

export default PostList
