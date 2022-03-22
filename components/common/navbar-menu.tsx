import Link from "next/link";

type Menu = {
  name: string;
  link: string;
};

const menuList: Menu[] = [
  { name: "Home", link: "/" },
  { name: "Posts", link: "/posts" },
];

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
