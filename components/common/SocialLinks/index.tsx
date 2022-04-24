import Link from 'next/link';
import IconsGithub from 'components/icons/Socials/IconsGithub';
import IconsInstagram from 'components/icons/Socials/IconsInstagram';
import IconsLinkedIn from 'components/icons/Socials/IconsLinkedin';

const SocialLinks = () => {
  return (
    <>
      <div>
        <Link href="https://github.com/irfan44">
          <a title="Github">
            <IconsGithub />
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/irfannm/">
          <a title="LinkedIn">
            <IconsLinkedIn />
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://www.instagram.com/irfan_nm44/">
          <a title="Instagram">
            <IconsInstagram />
          </a>
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
