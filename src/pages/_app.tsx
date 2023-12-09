import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store/store'
import 'typeface-nunito'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster position='bottom-left' toastOptions={{
        className: 'min-w-[280px] h-[3.5rem] bg-secondary text-light flex',
        style: {
          background: '#EA7C69',
          color: '#fff'
        },
        duration: 5000,
      }} />
      <Component {...pageProps} />
    </Provider> 
  )}
