import Link from 'next/link';
import CoverImage from 'components/common/CoverImage';
import DateFormatter from 'components/common/DateFormatter';

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
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="mb-3">
        <Link href={`/blog/${slug}`}>
          <a className="hover:underline" title={title}>
            {title}
          </a>
        </Link>
      </h3>
      <div className="mb-4 flex space-x-2 text-sm">
        <div className="font-bold">{category}</div>
        <div>|</div>
        <DateFormatter dateString={date} />
      </div>
      <p className="leading-relaxed mb-4 text-base">{excerpt}</p>
    </div>
  );
};

export default PostCard;
