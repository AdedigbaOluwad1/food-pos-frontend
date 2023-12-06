import React, { useState } from 'react'
import { navLink } from '@/data/data'
import SideBarLink from '@/components/sidebar-components/link'
import Logo from '@/components/general/logo'
import homeActive from '@/assets/icons/home-icon-active.svg'
import home from '@/assets/icons/home-icon.svg'

export default function SideBar() {
  const [activeLink, setActiveLink] = useState<navLink>()
  
  return (
    <div 
      className='min-h-screen flex items-center flex-col bg-primary' 
      style={{
        gap: '1.875rem',
        position: 'fixed',
        zIndex: 10,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        width: '6.5rem'
      }}
    >
      <Logo />

      <div 
        className='w-full flex flex-col' 
        style={{
          paddingLeft: '0.75rem',
          alignItems: 'flex-end'
        }}
      >
        <SideBarLink 
          active={false} 
          activeIcon={homeActive} 
          icon={home} 
          link=''  
        />
      </div>
    </div>
  )
}
