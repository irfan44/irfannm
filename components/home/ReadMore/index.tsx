import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ReadMore = () => {
  return (
    <Link href="/blog">
      <a>
        <p className="mt-4 font-medium flex items-center hover:cursor-pointer text-black dark:text-white">
          Read all posts
          <HiArrowNarrowRight className="text-xl ml-1" />
        </p>
      </a>
    </Link>
  );
};
export default ReadMore;
