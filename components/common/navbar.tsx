import Link from "next/link";
import Container from "../layouts/container";
import NavbarMenu from "./navbar-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-10">
      <Container>
        <div className="flex justify-between pt-6 pb-4 items-center">
          <div>
            <h2 className="font-bold leading-tight">
              <Link href="/">
                <a>inm</a>
              </Link>
            </h2>
          </div>
          <div>
            <ul className="flex flex-row items-center space-x-6">
              <NavbarMenu />
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
