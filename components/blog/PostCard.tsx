import Link from 'next/link'

import DateTime from 'components/common/base/DateTime'
import PostCoverImage from 'components/post/PostCoverImage'

type Props = {
  title: string
  category: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostCard = ({
  title,
  category,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  const handleCategory = (category: string) => {
    if (category === 'GenerasiGigih') {
      return 'Generasi Gigih'
    }

    return category
  }

  return (
    <Link
      className="m-0 flex flex-col h-full space-y-4 rounded-2xl border border-neutral-200 bg-secondary dark:bg-neutral-800 dark:border-neutral-700 hover:rounded-xl"
      href={`/blog/${slug}`}
      passHref
    >
      <div className="flex-1 px-4 space-y-4">
        <div className="flex space-x-2 text-sm mt-4">
          <div className="font-bold">{handleCategory(category)}</div>
          <div>|</div>
          <DateTime dateString={date} />
        </div>
        <h3>{title}</h3>
        <p className="leading-relaxed text-base line-clamp-3">{excerpt}</p>
      </div>
      <div className="flex items-end">
        <div className="px-4 pb-3">
          <PostCoverImage
            title={title}
            src={coverImage}
            height={278}
            width={556}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
