import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ReadMore = () => {
  return (
    <div className="mt-4 font-medium">
      <Link href="/blog">
        <a>
          <div className="flex items-center space-x-1 font-medium hover:cursor-pointer text-black dark:text-white">
            <p>Read all posts</p>
            <HiArrowNarrowRight className="text-xl" />
          </div>
        </a>
      </Link>
    </div>
  );
};
export default ReadMore;
