import Link from "next/link";
import menuList from "../../data/menu-list";

const NavbarMenu = () => {
  return (
    <>
      {menuList.map(({ name, link }) => {
        return (
          <li key={name} className="hover:underline">
            <Link href={link}>
              <a>{name}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavbarMenu;
