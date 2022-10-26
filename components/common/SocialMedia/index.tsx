import Link from 'next/link';
import socials from 'data/constants/socials';

const SocialMedia = () => {
  return (
    <ul className="flex space-x-4">
      {socials.map((social) => {
        return (
          <li key={social.name} className="text-2xl text-black dark:text-white">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              key={social.name}
              href={social.link}
              passHref
            >
              <social.icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
