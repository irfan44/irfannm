import Link from 'next/link';
import DateFormatter from 'components/common/DateFormatter';
import CoverImage from 'components/common/Images';

type Props = {
  title: string;
  category: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostCard = ({
  title,
  category,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="m-0 flex flex-col h-full space-y-4 rounded-2xl bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 hover:rounded-xl">
        <div className="flex-1 px-4 space-y-4">
          <div className="flex space-x-2 text-sm mt-4">
            <div className="font-bold">{category}</div>
            <div>|</div>
            <DateFormatter dateString={date} />
          </div>
          <h3>{title}</h3>
          <p className="leading-relaxed text-base line-clamp-3">{excerpt}</p>
        </div>
        <div className="flex items-end">
          <div className="px-4 pb-3">
            <CoverImage
              title={title}
              src={coverImage}
              height={278}
              width={556}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
