import Link from 'next/link';
import { useRouter } from 'next/router';
import menuList from 'data/menuList';

const Menu = () => {
  const router = useRouter();

  return (
    <>
      {menuList.map(({ name, link }) => {
        return (
          <li key={name}>
            <Link href={link}>
              <a>{name}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Menu;
