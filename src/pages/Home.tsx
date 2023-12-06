import { 
  useEffect,
  useState
} from 'react'
// import Logo from '@/assets/Logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='h-20 flex items-center justify-center' style={{
        borderBottom: '0.4px solid rgba(255, 255, 255, 0.06)'
      }}>
        <div className='w-11/12 max-w-[100rem] flex items-center justify-between'>
          <div className='flex gap-3 items-center'>
            <h3 className='text-xl font-bold'>
              Shopify
            </h3>
          </div>

          <button className='text-sm font-medium px-16 py-2 h-11' style={{
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 8,
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Login
          </button>
        </div>
      </div>

      <div className='h-full flex items-center justify-center flex-col flex-1 p-6 gap-3'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Welcome to Shopify</h1>
        <h1 className='text-lg md:text-xl font-medium max-w-[700px] text-center' style={{
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          ...where precision meets simplicity! Effortlessly create, track, and manage invoices, turning the hassle of billing into a seamless experience. Take control of your finances and watch your business thrive with our intuitive and efficient solution
        </h1>

        <div className='flex flex-wrap w-full max-w-[600px] gap-5 justify-center mt-4'>
          <button className='h-12 bg-light text-primary hover:opacity-80 transition-all' style={{
            flexBasis: 200,
            borderRadius: 20
          }}>
            Login
          </button>

          <button className='h-12' style={{
            flexBasis: 200,
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: 20
          }}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
