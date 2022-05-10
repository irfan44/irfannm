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

const HeroPost = ({
  title,
  category,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-3/5">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="lg:w-1/2 lg:px-8 mt-8 lg:mt-0">
        <div className="mb-4">
          <h3 className="mb-4 text-2xl lg:text-4xl font-bold">
            <Link href={`/blog/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 flex space-x-2">
            <div className="font-bold">{category}</div>
            <div>|</div>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
