import Footer from 'components/footer';
import Navbar from 'components/navbar';

type Props = {
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
