import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

import Moon from '@components/common/icons/Moon'
import Sun from '@components/common/icons/Sun'

const ThemeSwitcher = () => {
  return (
    <Switch
      // onChange={setCurrentTheme}
      className={`relative inline-flex h-8 w-16 items-center rounded-full border`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full p-1`}
      >
        <Moon />
      </span>
    </Switch>
  )
}

export default ThemeSwitcher
