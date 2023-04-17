import {useState} from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  return (
      <QueryClientProvider client={client}>
    <Hydrate state={pageProps.dehydratedState}>
    <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
  )
}
