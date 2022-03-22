import Link from "next/link";
import Container from "../layouts/container";
import NavbarMenu from "./navbar-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white">
      <Container>
        <div className="flex justify-between py-6 items-center">
          <div>
            <Link href="/">
              <a>
                <h2>inm</h2>
              </a>
            </Link>
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
