import Link from "next/link";
import Container from "../layouts/container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white">
      <Container>
        <div className="flex justify-between py-5">
          <div>Logo</div>
          <div>Links</div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
