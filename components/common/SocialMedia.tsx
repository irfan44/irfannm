import socials from 'data/socials';
import ExternalLink from 'lib/ui/ExternalLink';

const SocialMedia = () => {
  return (
    <ul className="flex space-x-4">
      {socials.map((social) => {
        return (
          <li key={social.name} className="text-2xl text-black dark:text-white">
            <ExternalLink type="text" title={social.name} href={social.link}>
              <span>
                <social.icon />
              </span>
            </ExternalLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
