import Link from 'next/link'

import DateTime from 'components/common/base/DateTime'

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
      className="m-0 flex h-full flex-col rounded-2xl border border-neutral-200 bg-secondary p-4 hover:bg-secondaryHover dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/75"
      href={`/blog/${slug}`}
      passHref
    >
      <div className="flex-1 space-y-4">
        <div className="flex space-x-2 text-sm">
          <span className="font-bold">{handleCategory(category)}</span>
          <span>|</span>
          <DateTime dateString={date} />
        </div>
        <h3>{title}</h3>
        <p className="line-clamp-3 text-base leading-relaxed">{excerpt}</p>
      </div>
      <div className="mt-4">
        <img
          src={coverImage}
          alt={`Cover Image for ${title}`}
          width="462"
          height="256"
          className="h-40 w-full rounded-2xl object-cover xl:h-64"
        />
      </div>
    </Link>
  )
}

export default PostCard
