import Link from 'next/link';
import SocialLink from 'components/common/SocialLinks';
import IconsGithub from 'components/icons/Socials/IconsGithub';
import Container from 'components/layouts/Container';
import Menu from '../Navbar/Menu';

const Footer = () => {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex py-12">
            <div className="flex-1 mx-auto md:mx-0 md:text-left">
              <div className="flex flex-col list-none space-y-1 md:hidden">
                <ul>
                  <Menu />
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-bold leading-tight md:pr-8 my-4 md:mb-4">
                  <Link href="/">
                    <a>inm</a>
                  </Link>
                </h2>
                <div className="flex space-x-4 mb-8 justify-center md:justify-start">
                  <SocialLink />
                </div>
                <p className="text-sm">© 2022 Irfan Nurghiffari Muhajir</p>
                <p className="text-sm">With 😻 using NextJS & Tailwind CSS</p>
              </div>
            </div>
            <div className="md:flex flex-col justify-between hidden">
              <ul className="flex flex-col ">
                <Menu />
              </ul>
              <div>
                <div>
                  <Link href="https://github.com/irfan44/irfannm">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-sm items-center"
                      title="Source code"
                    >
                      <span className="mr-2">
                        <IconsGithub />
                      </span>
                      Source code
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
