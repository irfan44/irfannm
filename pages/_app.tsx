import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import 'styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
