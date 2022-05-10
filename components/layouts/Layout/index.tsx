import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Navbar';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16 transition-all">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
