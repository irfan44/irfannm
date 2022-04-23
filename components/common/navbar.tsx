import Link from "next/link";
import { useState } from "react";
import IconMenu from "../icons/icons-menu";
import IconClose from "../icons/icons-close";
import Container from "../layouts/container";
import NavbarMenu from "./navbar-menu";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white z-10">
      <Container>
        <div className="flex justify-between py-4 items-center">
          <div>
            <h2 className="font-bold leading-tight">
              <Link href="/">
                <a>inm</a>
              </Link>
            </h2>
          </div>
          <div className="md:hidden ml-auto py-auto flex items-center">
            <button
              className="ml-2"
              title="Menu"
              onClick={() => {
                isActive ? setActive(false) : setActive(true);
              }}
            >
              {isActive ? <IconClose /> : <IconMenu />}
            </button>
          </div>
          <div className="hidden md:block text-left">
            <ul className="flex flex-row items-center space-x-6">
              <NavbarMenu />
            </ul>
          </div>
        </div>
        {isActive && (
          <div className="h-screen">
            <div className="w-full border rounded-lg border-zinc-200 p-4">
              <div className="grid items-center">
                <ul className="flex flex-col space-y-4 items-center">
                  <NavbarMenu />
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
