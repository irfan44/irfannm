import Link from 'next/link';
import { RiExternalLinkLine } from 'react-icons/ri';
import socials from 'data/socials';

const SocialContact = () => {
  return (
    <div>
      <div className="mb-6">
        <h2>Contact</h2>
      </div>
      <p className="mb-2">
        Here are several of my socials for you to look at. Feel free to follow
        and check out for my things i do :
      </p>
      <ul className="list-disc ml-4 space-y-1">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                passHref
              >
                {social.name}{' '}
                <span className="ml-1">
                  <RiExternalLinkLine />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialContact;
