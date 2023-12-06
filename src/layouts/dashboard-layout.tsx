import React from 'react'
import SideBar from '@/sections/sidebar'

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div 
      className='flex h-screen'
      style={{
        background: '#252836'
      }}
    >
      <SideBar />
      <div 
        className='w-full' 
        style={{
          marginLeft: '6.5rem'
        }}
      >
        <div 
          className='w-full min-h-screen flex' 
          style={{
            background: '#252836',
            padding: '1.5rem'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
