import DateFormatter from "../common/date-formatter";
import CoverImage from "../common/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({
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
      <h4 className="mb-3">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>
      <div className="mb-4 flex space-x-2">
        <div className="text-black font-bold">{category}</div>
        <div>|</div>
        <DateFormatter dateString={date} />
      </div>
      <p className="leading-relaxed mb-4 text-base">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
