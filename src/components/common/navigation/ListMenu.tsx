import navMenus from '@libs/constants/navMenus'

type Props = {
  setActive?: any
}

const ListMenu = ({ setActive }: Props) => {
  return (
    <>
      {navMenus.map(({ name, link }) => {
        return (
          <li key={name}>
            <a
              className="hover:text-black dark:hover:text-white"
              href={link}
              onClick={() => setActive && setActive(false)}
            >
              {name}
            </a>
          </li>
        )
      })}
    </>
  )
}

export default ListMenu
