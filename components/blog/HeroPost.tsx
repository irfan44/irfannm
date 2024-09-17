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

const HeroPost = ({
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
      className="flex flex-col lg:flex-row lg:items-center"
      href={`/blog/${slug}`}
      passHref
    >
      <div className="lg:w-3/5">
        <img
          src={coverImage}
          alt={`Cover Image for ${title}`}
          width="555"
          height="320"
          className="h-64 w-full rounded-2xl object-cover md:h-80 xl:h-96"
        />
      </div>
      <div className="mt-8 space-y-4 lg:mt-0 lg:w-1/2 lg:px-8">
        <h3 className="text-2xl font-bold lg:text-4xl">{title}</h3>
        <div className="flex space-x-2">
          <div className="font-bold">{handleCategory(category)}</div>
          <div>|</div>
          <DateTime dateString={date} />
        </div>
        <p className="leading-relaxed">{excerpt}</p>
      </div>
    </Link>
  )
}

export default HeroPost
