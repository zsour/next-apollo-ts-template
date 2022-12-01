import type { AppProps } from 'next/app';
import ApolloWrapper from '../common/hooks/ApolloWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloWrapper>
    <Component {...pageProps} />
  </ApolloWrapper>
}
