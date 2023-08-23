import { RiExternalLinkLine } from 'react-icons/ri';
import socials from 'data/socials';
import ExternalLink from 'lib/ui/ExternalLink';

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
              <div className="hover:underline">
                <ExternalLink
                  type="text"
                  title={social.name}
                  href={social.link}
                  iconRight={<RiExternalLinkLine />}
                >
                  <span>{social.name}</span>
                </ExternalLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialContact;
