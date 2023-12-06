import React from 'react'
import SideBar from '@/sections/sidebar'

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div className='flex h-screen'>
        <SideBar />
      <div className='w-full' style={{
        marginLeft: '6.5rem'
      }}>
        <div className='w-full min-h-screen' style={{
          background: '#fff',
          backdropFilter: 'blur(4px)',
          padding: '2rem'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}
