import Link from 'next/link';
import socialList from 'data/socialList';

const SocialLinks = () => {
  return (
    <div className="text-2xl text-black dark:text-white">
      <div className="flex space-x-4">
        {socialList.map((social) => {
          return (
            <Link key={social.name} href={social.link} passHref>
              <a target="_blank" rel="noopener noreferrer" title={social.name}>
                <social.icon />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
