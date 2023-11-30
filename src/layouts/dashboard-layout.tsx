import React from 'react'
import SideBar from '@/sections/sidebar'

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div className='flex h-screen'>
        <SideBar />
      <div className='w-full bg-primary' style={{
        marginLeft: '22rem'
      }}>
        <div className='w-full min-h-full' style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(4px)',
          padding: '2rem'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}
