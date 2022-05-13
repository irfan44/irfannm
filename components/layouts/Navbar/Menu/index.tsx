import Link from 'next/link';
import { useRouter } from 'next/router';
import menuList from 'data/menuList';

const Menu = () => {
  const route = useRouter();
  return (
    <>
      {menuList.map(({ name, link }) => {
        return (
          <li
            key={name}
            className={
              route.pathname == link
                ? 'w-fit text-neutral-900 border-b-2 border-neutral-900 font-bold dark:text-white dark:border-white'
                : ''
            }
          >
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
