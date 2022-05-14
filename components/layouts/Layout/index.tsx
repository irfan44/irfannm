import Footer from 'components/common/Footer';
import Navbar from 'components/common/Navbar';

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
