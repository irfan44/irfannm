import Image from "next/image";
import SocialLink from "../../common/social-link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h1>Hi! I'm irfan</h1>
        <p>
          A software engineering student who have a lot of passion in
          technology. I mainly learn about cloud computing and system
          administration using Linux. I also do a lot of software development
          myself, especially web and mobile apps development. Other than
          technology, i have a lot of interest in economics and investing
        </p>
        <div className="flex space-x-4">
          <SocialLink />
        </div>
      </div>
      <div className="md:w-1/2 justify-center flex">
        <Image src="/assets/images/Person.svg" width="320" height="320" />
      </div>
    </div>
  );
};

export default HeroSection;
