import { useState } from 'react'
import Link from 'next/link'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'

import ContactButton from 'components/common/ContactButton'
import Container from 'components/layouts/Container'
import Menu from 'components/navigation/ListMenu'
import TabMenu from 'components/navigation/TabMenu'
import ThemeSwitcher from 'components/ThemeSwitcher'

const Navbar = () => {
  const [isActive, setActive] = useState(false)

  return (
    <nav className="z-10 mt-4 w-full bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            className="leading-tightfont-sans block text-2xl font-bold leading-tight tracking-tighter text-black dark:text-white md:text-4xl"
            href="/"
          >
            inm
          </Link>
          <div className="py-auto ml-auto flex items-center space-x-2 md:hidden">
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
          <div className="hidden text-left md:block">
            <TabMenu />
          </div>
          <div className="hidden text-left md:block">
            <ThemeSwitcher />
          </div>
        </div>
        {isActive && (
          <div className="h-screen w-full">
            <div className="grid items-center rounded-lg border border-zinc-200 p-4">
              <ul className="flex flex-col items-center space-y-4">
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
