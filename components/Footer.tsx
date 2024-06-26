import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import ContactButton from 'components/common/ContactButton'
import SocialLinks from 'components/common/SocialMedia'
import Container from 'components/layouts/Container'
import Menu from 'components/navigation/ListMenu'

const Footer = () => {
  return (
    <Container>
      <div className="mt-32 mb-6 rounded-3xl flex py-12">
        <div className="flex-1 mx-auto md:mx-0 text-center md:text-left">
          <ul className="flex flex-col list-none space-y-1 md:hidden">
            <Menu />
          </ul>
          <div className="md:pr-8 my-4">
            <Link
              href="/"
              className="font-sans text-2xl font-bold md:text-4xl tracking-tighter leading-tight text-black dark:text-white"
            >
              inm
            </Link>
          </div>
          <div className="flex space-x-4 mb-8 justify-center md:justify-start">
            <SocialLinks />
          </div>
          <div className="mb-4 flex justify-center md:justify-start">
            <ContactButton />
          </div>
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} Irfan Nurghiffari Muhajir
            </p>
            <p className="text-sm">With 😻 using NextJS & Tailwind CSS</p>
          </div>
          <div className="md:hidden mt-6 flex justify-center">
            <a
              href="https://github.com/irfan44/irfannm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-sm items-center"
              title="Source code"
            >
              <FaGithub className="mr-2 text-xl text-black dark:text-white" />
              Source code
            </a>
          </div>
        </div>
        <div className="md:flex flex-col justify-between hidden">
          <ul className="flex flex-col w-fit">
            <Menu />
          </ul>
          <a
            href="https://github.com/irfan44/irfannm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-sm items-center"
            title="Source code"
          >
            <FaGithub className="mr-2 text-xl text-black dark:text-white" />
            Source code
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Footer
