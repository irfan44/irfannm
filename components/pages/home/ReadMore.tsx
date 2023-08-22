import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ReadMore = () => {
  return (
    <Link href="/pages/blog" passHref>
      <p className="mt-4 font-medium flex items-center hover:cursor-pointer hover:underline text-black dark:text-white">
        Read all posts
        <HiArrowNarrowRight className="text-xl ml-1" />
      </p>
    </Link>
  );
};
export default ReadMore;
