import Footer from "../common/footer";
import Meta from "../common/meta";
import Navbar from "../common/navbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen mt-32">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
