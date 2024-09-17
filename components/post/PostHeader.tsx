import DateTime from 'components/common/base/DateTime'
import Title from 'components/common/base/Title'
import PostCoverImage from 'components/post/PostCoverImage'

type Props = {
  title: string
  category: string
  coverImage: string
  date: string
  caption: string
}

const PostHeader = ({ title, category, coverImage, date, caption }: Props) => {
  return (
    <>
      <Title
        type="pageTitle"
        className="mb-4 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-5xl md:leading-none lg:text-5xl"
      >
        {title}
      </Title>
      <div className="mb-8 flex items-center justify-center md:justify-start">
        <div className="font-bold">{category}</div>
        <div className="px-2">|</div>
        <div>
          <DateTime dateString={date} />
        </div>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <figure>
          <PostCoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </>
  )
}

export default PostHeader
