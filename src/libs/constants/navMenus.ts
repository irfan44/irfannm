interface Menu {
  name: string
  link: string
}

const navMenus: Menu[] = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
]

export default navMenus
