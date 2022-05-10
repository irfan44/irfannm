import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  width: number;
  height: number;
  slug?: string;
};

const CoverImage = ({ title, src, width, height, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      className="rounded-2xl"
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
