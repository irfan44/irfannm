import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ReadMore = () => {
  return (
    <div className="mt-4 font-medium">
      <Link href="/blog">
        <a>
          <div className="flex items-center space-x-1 font-medium hover:cursor-pointer text-black dark:text-white">
            <p>Read all posts</p>
            <p className="text-xl">
              <HiArrowNarrowRight />
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default ReadMore;
