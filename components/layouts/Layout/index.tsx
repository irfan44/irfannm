import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Header';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-32">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
