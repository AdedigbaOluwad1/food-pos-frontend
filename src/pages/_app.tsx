import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store/store'
import 'typeface-nunito'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster position='top-right' toastOptions={{
        className: 'min-w-[250px] h-[3.2rem] flex',
      }} />
      <Component {...pageProps} />
    </Provider> 
  )}
