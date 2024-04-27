import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  url: string;
};

const ReadMore = (props: Props) => {
  return (
    <Link href={`/${props.url}`} passHref>
      <p className="mt-4 font-medium flex items-center hover:cursor-pointer hover:underline text-black dark:text-white">
        {props.children}
        <HiArrowNarrowRight className="text-xl ml-1" />
      </p>
    </Link>
  );
};
export default ReadMore;
