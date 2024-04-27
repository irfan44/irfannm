import PostCoverImage from 'components/post/PostCoverImage'
import DateTime from 'components/common/base/DateTime'
import Title from 'components/common/base/Title'

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
        className="lg:text-5xl md:text-5xl text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left"
      >
        {title}
      </Title>
      <div className="flex items-center mb-8 justify-center md:justify-start">
        <div className="font-bold">{category}</div>
        <div className="px-2">|</div>
        <div>
          <DateTime dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
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
