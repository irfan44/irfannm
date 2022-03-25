import Container from "../layouts/container";
import SocialLink from "./social-link";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <div className="flex py-12">
          <div className="mx-auto text-center md:mx-0 md:text-left">
            <h2 className="font-bold leading-tight md:pr-8 mb-4 text-center md:text-left">
              <Link href="/">
                <a>inm</a>
              </Link>
            </h2>
            <div className="flex space-x-4 mb-8 justify-center md:justify-start">
              <SocialLink />
            </div>
            <p className="text-sm">MIT License</p>
            <p className="text-sm">© 2022 Irfan Nurghiffari Muhajir</p>
            <p className="text-sm mt-2">With 😻 using NextJS & Tailwind CSS</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
