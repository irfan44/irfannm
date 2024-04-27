import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Container from 'components/layouts/Container'
import { useScrollRestoration } from 'lib/hooks/useScrollRestoration'
import 'styles/index.css'
import 'styles/nprogress.css'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router)

  return (
    <>
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
  )
}
