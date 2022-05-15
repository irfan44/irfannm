import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import SocialLinks from 'components/common/SocialLinks';
import Container from 'components/layouts/Container';
import ContactButton from '../common/ContactButton';
import Menu from '../common/Menu';

const Footer = () => {
  return (
    <footer className="mt-32 mb-6">
      <Container>
        <div className="border-neutral-200 rounded-3xl px-6 border dark:border-neutral-700">
          <div className="flex py-12">
            <div className="flex-1 mx-auto md:mx-0 md:text-left">
              <div className="flex flex-col list-none space-y-1 md:hidden">
                <ul>
                  <Menu />
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-bold leading-tight md:pr-8 my-4">
                  <Link href="/">
                    <a>inm</a>
                  </Link>
                </h2>
                <div className="flex space-x-4 mb-8 justify-center md:justify-start">
                  <SocialLinks />
                </div>
                <div className="mb-4 flex justify-center md:justify-start">
                  <ContactButton />
                </div>
                <div>
                  <p className="text-sm">© 2022 Irfan Nurghiffari Muhajir</p>
                  <p className="text-sm">With 😻 using NextJS & Tailwind CSS</p>
                </div>
              </div>
            </div>
            <div className="md:flex flex-col justify-between hidden">
              <ul className="flex flex-col w-fit">
                <Menu />
              </ul>
              <div>
                <div>
                  <Link href="https://github.com/irfan44/irfannm.xyz">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-sm items-center"
                      title="Source code"
                    >
                      <span className="mr-2 text-xl text-black dark:text-white">
                        <FaGithub />
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
