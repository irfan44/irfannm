import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'

import Moon from 'components/icons/Moon'
import Sun from 'components/icons/Sun'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme
  const setCurrentTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      onChange={setCurrentTheme}
      className={`${
        currentTheme === 'dark'
          ? 'bg-neutral-800 border-neutral-700'
          : 'bg-neutral-100 border-neutral-200'
      } relative inline-flex h-8 w-16 items-center rounded-full border`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          currentTheme === 'dark'
            ? 'translate-x-9 bg-neutral-900'
            : 'translate-x-1 bg-white'
        } inline-block h-6 w-6 transform rounded-full p-1`}
      >
        {currentTheme === 'dark' ? <Moon /> : <Sun />}
      </span>
    </Switch>
  )
}

export default ThemeSwitcher
