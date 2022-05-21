import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import 'styles/index.css';
import Router from 'next/router';

import NProgress from 'nprogress'; //nprogress module
import 'styles/nprogress.css'; //styles of nprogress\
import { useScrollRestoration } from 'utils/useScrollRestoration';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
