import Image from 'next/image';
import Link from 'next/link';
import { FaRegPaperPlane } from 'react-icons/fa';
import SocialLink from 'components/common/SocialLinks';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 mb-12">
      <div className="md:w-1/2 space-y-6">
        <div>
          <p className="font-bold text-xl text-black dark:text-white">Hi,</p>
          <h1>I&apos;m Irfan! 👋</h1>
        </div>
        <p>
          A software engineering student who have a lot of passion in technology
          and web development, especially frontend development using React &
          NextJS
        </p>
        <div className="w-fit text-black dark:text-white">
          <Link href="mailto:irfannmuhajir@gmail.com">
            <a target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-2">
                <p className="font-medium border-b-2 border-neutral-900 dark:border-gray-200">
                  Contact me!
                </p>
                <p className="text-xl">
                  <FaRegPaperPlane />
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex space-x-4 py-4">
          <SocialLink />
        </div>
      </div>
      <div className="md:w-1/2 justify-center flex">
        <Image
          src="/assets/images/Person.svg"
          alt="Hero"
          width="320"
          height="320"
        />
      </div>
    </div>
  );
};

export default HeroSection;
