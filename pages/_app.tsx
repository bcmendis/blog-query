import {useState} from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  return (
      <QueryClientProvider client={client}>
    <Hydrate state={pageProps.dehydratedState}>
      <Layout>
    <Component {...pageProps} />
      </Layout>
    </Hydrate>
  </QueryClientProvider>
  )
}
