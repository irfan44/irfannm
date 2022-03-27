import DateFormatter from "../common/date-formatter";
import CoverImage from "../common/cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
  category: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, category, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center mb-8 justify-center md:justify-start">
        <div className="font-bold">{category}</div>
        <div className="px-2">|</div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  );
};

export default PostHeader;
