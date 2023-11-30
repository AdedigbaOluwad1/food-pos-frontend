import React from 'react'
import Image from 'next/image'

export default function DashboardCards({ bg, icon, value, title }: { bg: string, icon: string, value: number, title: string }) {
  return (
    <div className='h-[7rem] p-6 bg-primary flex items-center cursor-pointer' style={{ borderRadius: 12, flex: '1 0 320px', gap: '1rem' }}>
        <div className='flex items-center justify-center' style={{
            width: '3rem',
            height: '3rem',
            padding: '0.5rem',
            borderRadius: 8,
            background: bg
        }}>
            <Image alt='any' src={icon} style={{
                width: '1.5rem'
            }} />
        </div>

        <div>
            <p className='text-xl font-bold'>
                {value.toLocaleString()}
            </p>
            <p className='text-sm font-medium'>
                {title}
            </p>
        </div>
    </div>
  )
}
