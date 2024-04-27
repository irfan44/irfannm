import { motion } from 'framer-motion';
import Image from 'next/image';
import SocialLink from 'components/common/SocialMedia';
import Text from 'lib/ui/Text';
import ResumeButton from 'components/common/ResumeButton';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 mb-12">
      <div className="md:w-1/2 space-y-6">
        <div>
          <p className="font-bold text-xl text-black dark:text-white">Hi,</p>
          <Text type="pageTitle">
            I&apos;m Irfan!{' '}
            <motion.div
              className="inline-block"
              animate={{ rotate: 20 }}
              transition={{
                ease: 'easeInOut',
                type: 'tween',
                repeatType: 'reverse',
                repeat: 19,
              }}
            >
              👋
            </motion.div>
          </Text>
        </div>
        <p>
          A software engineering graduate who have a lot of passion in web
          development, especially frontend development using React, NextJS, and
          Angular, with special interest in the banking or finance related
          industry
        </p>
        <div>
          <ResumeButton />
        </div>
        <div className="flex space-x-4 py-4">
          <SocialLink />
        </div>
      </div>
      <div className="md:w-1/2 justify-center flex">
        <Image
          fetchPriority="auto"
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
