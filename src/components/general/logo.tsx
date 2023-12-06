import React from 'react'
import Image from 'next/image'
import logo from '@/assets/icons/logo.svg'

export default function Logo() {
  return (
    <div 
        className='flex items-center justify-center' 
        style={{
            width: '3.5rem',
            height: '3.5rem',
            background: 'rgba(235, 150, 106, 0.26)',
            borderRadius: '12px'
        }}
    >
        <Image 
            className='w-10 h-10' 
            alt='logo' 
            src={logo} 
            style={{
                width: '2.5rem',
                height: '2.5rem'
            }} 
        />
      </div>
  )
}
