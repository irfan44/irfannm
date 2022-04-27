import Link from 'next/link';
import menuList from 'data/menuList';

const Menu = () => {
  return (
    <>
      {menuList.map(({ name, link }) => {
        return (
          <li key={name}>
            <Link href={link}>
              <a className="hover:text-black dark:hover:text-white">{name}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Menu;
