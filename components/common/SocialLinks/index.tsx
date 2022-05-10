import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 text-2xl text-black dark:text-white">
      <div>
        <Link href="https://github.com/irfan44" passHref>
          <a target="_blank" rel="noopener noreferrer" title="Github">
            <FaGithub />
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/irfannm/" passHref>
          <a target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedinIn />
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://www.instagram.com/irfan_nm44/" passHref>
          <a target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
