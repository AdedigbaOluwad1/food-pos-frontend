import React from 'react'
import SideBar from '@/sections/sidebar'

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div 
      className='grid h-screen'
      style={{
        background: '#252836',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '6.5rem 1fr'
      }}
    >
      <SideBar />
      <div 
        className='w-full max-h-screen'
        style={{ gridColumn: '1fr'}}
      >
        <div 
          className='w-full flex' 
          style={{
            background: '#252836',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
