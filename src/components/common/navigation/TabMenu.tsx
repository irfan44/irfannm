import { Tab } from '@headlessui/react'

import navMenus from '@libs/constants/navMenus'

const TabMenu = () => {
  return (
    <div className="flex h-9 items-center rounded-full border border-neutral-200 bg-secondary px-1 text-sm dark:border-neutral-700 dark:bg-neutral-800">
      <Tab.Group>
        <Tab.List className="space-x-1">
          {navMenus.map(({ name, link }) => {
            return (
              <Tab key={name}>
                <div className="relative px-3 py-1">
                  <a href={link}>
                    {name}
                  </a>
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
