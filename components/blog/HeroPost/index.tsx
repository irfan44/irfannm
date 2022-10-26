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

const HeroPost = ({
  title,
  category,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <Link
      className="flex flex-col lg:flex-row lg:items-center"
      href={`/blog/${slug}`}
      passHref
    >
      <div className="lg:w-3/5">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="lg:w-1/2 lg:px-8 mt-8 lg:mt-0 space-y-4">
        <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
        <div className="flex space-x-2">
          <div className="font-bold">{category}</div>
          <div>|</div>
          <DateFormatter dateString={date} />
        </div>
        <p className="leading-relaxed">{excerpt}</p>
      </div>
    </Link>
  );
};

export default HeroPost;
