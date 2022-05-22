import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import 'styles/index.css';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'styles/nprogress.css'; //styles of nprogress\
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import { useScrollRestoration } from 'utils/useScrollRestoration';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);

  return (
    <ThemeProvider enableSystem attribute="class">
      <Navbar />
      <main className="min-h-screen mt-16 transition-all">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
