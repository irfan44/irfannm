import { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Container from 'components/common/layouts/Container'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
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
        <main className="mt-16 min-h-screen transition-all">
          <Container>
            <Component {...pageProps} />
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
      <SpeedInsights />
    </>
  )
}
