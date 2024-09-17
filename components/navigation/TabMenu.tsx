import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'

import navMenu from 'datas/navMenu'

const TabMenu = () => {
  const route = useRouter()
  const { pathname } = useRouter()

  return (
    <div className="flex h-9 items-center rounded-full border border-neutral-200 bg-secondary px-1 text-sm dark:border-neutral-700 dark:bg-neutral-800">
      <Tab.Group>
        <Tab.List className="space-x-1">
          {navMenu.map(({ name, link }) => {
            return (
              <Tab key={name}>
                <div className="relative px-3 py-1">
                  <Link
                    className={
                      route.pathname == link ||
                      (pathname.startsWith(link) && link != '/')
                        ? 'relative z-[1] font-bold text-black dark:text-white'
                        : 'relative z-[1] font-normal'
                    }
                    href={link}
                  >
                    {name}
                  </Link>
                  {route.pathname == link ||
                  (pathname.startsWith(link) && link != '/') ? (
                    <motion.div
                      className="absolute left-0 right-0 top-0 z-[0] h-full rounded-full bg-white dark:bg-neutral-900"
                      layoutId="active"
                      transition={{
                        type: 'spring',
                        stiffness: 270,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </div>
              </Tab>
            )
          })}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default TabMenu
