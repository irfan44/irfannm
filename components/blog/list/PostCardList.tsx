import PostCard from 'components/blog/list/PostCard'
import type { PostsModel } from 'lib/models/post'

type Props = {
  posts: PostsModel
}

const PostCardList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-6 lg:gap-8">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          category={post.blogCategory.name}
          coverImage={post.coverImage.derived[0].secure_url}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}

export default PostCardList
