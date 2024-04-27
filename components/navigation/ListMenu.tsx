import Link from 'next/link';
import { useRouter } from 'next/router';
import navMenu from 'datas/navMenu';

type Props = {
  setActive?: any;
};

const ListMenu = ({ setActive }: Props) => {
  const route = useRouter();
  const { pathname } = useRouter();

  return (
    <>
      {navMenu.map(({ name, link }) => {
        return (
          <li
            key={name}
            className={
              route.pathname == link ||
              (pathname.startsWith(link) && link != '/')
                ? 'w-text-neutral-900 font-bold dark:text-white'
                : ''
            }
          >
            <Link
              className="hover:text-black dark:hover:text-white"
              href={link}
              onClick={() => setActive && setActive(false)}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default ListMenu;
