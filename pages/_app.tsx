import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import 'styles/index.css';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'styles/nprogress.css'; //styles of nprogress\
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import { useScrollRestoration } from 'utils/useScrollRestoration';
import Container from 'components/layouts/Container';
import { DefaultSeo } from 'next-seo';
import { BASE_URL, SITE_NAME } from 'data/constants';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);

  return (
    <>
      <DefaultSeo
        title={`${SITE_NAME}`}
        description="Irfan Nurghiffari Muhajir's personal website & blog"
        openGraph={{
          type: 'website',
          locale: 'id_ID',
          url: `${BASE_URL}/`,
          siteName: `${SITE_NAME}`,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider enableSystem attribute="class">
        <Navbar />
        <main className="min-h-screen mt-16 transition-all">
          <Container>
            <Component {...pageProps} />
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
