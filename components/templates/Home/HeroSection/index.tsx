import Image from 'next/image';
import SocialLink from 'components/common/SocialLinks';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 mb-12">
      <div className="md:w-1/2 space-y-6">
        <h1>Hi, I&apos;m Irfan!</h1>
        <p>
          A software engineering student who have a lot of passion in technology
          and web development. I mainly learn about frontend development using
          React & NextJS. I also regularly use cloud platform such as AWS, Azure
          & GCP and have experience in using Kubernetes & Red Hat Openshift.
          Other than technology, i have a lot of interest in economics and
          investing.
        </p>
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
