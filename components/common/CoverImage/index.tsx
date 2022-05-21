import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  width: number;
  height: number;
};

const CoverImage = ({ title, src, width, height }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      className="rounded-2xl"
    />
  );
  return <div className="sm:mx-0">{image}</div>;
};

export default CoverImage;
