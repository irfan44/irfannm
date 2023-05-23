import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactButton from 'components/common/ContactButton';
import SocialLink from 'components/common/SocialMedia';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 mb-12">
      <div className="md:w-1/2 space-y-6">
        <div>
          <p className="font-bold text-xl text-black dark:text-white">Hi,</p>
          <h1>
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
          </h1>
        </div>
        <p>
          A software engineering student who have a lot of passion in technology
          and web development, especially frontend development using React,
          NextJS, and Angular
        </p>
        <ContactButton />
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
