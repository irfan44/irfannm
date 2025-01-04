import Section from '@components/common/layouts/Section'
import ReadMore from '@components/home/ReadMore'
import type { PostsModel } from '@libs/models/post'

interface Props {
  highlightedPosts: PostsModel
}

const HighlightedPosts = ({ highlightedPosts }: Props) => {
  return (
    <Section title="Latest Posts">
      {/* <PostsList posts={highlightedPosts} /> */}
      <ReadMore url="/blog">Read more posts</ReadMore>
    </Section>
  )
}

export default HighlightedPosts
