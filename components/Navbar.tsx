import Link from 'next/link'
import { useState } from 'react'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'
import ContactButton from 'components/common/ContactButton'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Container from 'components/layouts/Container'
import Menu from 'components/navigation/ListMenu'
import TabMenu from 'components/navigation/TabMenu'

const Navbar = () => {
  const [isActive, setActive] = useState(false)

  return (
    <nav className="mt-4 w-full bg-neutral-50 dark:bg-neutral-900 z-10">
      <Container>
        <div className="flex justify-between py-4 items-center">
          <Link
            className="leading-tightfont-sans text-2xl font-bold md:text-4xl tracking-tighter leading-tight text-black dark:text-white block"
            href="/"
          >
            inm
          </Link>
          <div className="flex space-x-2 items-center md:hidden ml-auto py-auto">
            <button
              className="ml-2 flex items-center"
              type="button"
              title="Menu"
              onClick={() => {
                isActive ? setActive(false) : setActive(true)
              }}
            >
              {isActive ? (
                <p className="text-xl">
                  <RiCloseLine />
                </p>
              ) : (
                <p className="text-xl">
                  <RiMenuLine />
                </p>
              )}
            </button>
          </div>
          <div className="hidden md:block text-left">
            <TabMenu />
          </div>
          <div className="hidden md:block text-left">
            <ThemeSwitcher />
          </div>
        </div>
        {isActive && (
          <div className="h-screen w-full">
            <div className="grid items-center border rounded-lg border-zinc-200 p-4">
              <ul className="flex flex-col space-y-4 items-center">
                <Menu setActive={setActive} />
                <li>
                  <ContactButton />
                </li>
                <li>
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar
