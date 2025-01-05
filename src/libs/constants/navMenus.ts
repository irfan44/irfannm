interface Menu {
  name: string
  link: string
}

const NAV_MENUS: Menu[] = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
]

export { NAV_MENUS }
