import React, { useState } from 'react'
import dashboardIcon from '@/assets/dashboard-icon.svg'
import Avatar from '@/assets/avatar(1).png'
import Image from 'next/image'
import { navigation } from '@/data/data-store'
import { navLink } from '@/data/data'
import Link from 'next/link'
import Logout from '@/assets/logout.svg'

export default function SideBar() {
  const [activeLink, setActiveLink] = useState<navLink>()
  return (
    <div className='min-h-screen flex flex-col bg-primary' style={{
      gap: '2.75rem',
      width: '20rem',
      padding: '1.5rem',
      position: 'fixed',
      zIndex: 10
    }}>
      <div className='flex items-center' style={{
        gap: '0.75rem'
      }}>
        <Image 
          src={Avatar} 
          alt='dashboard' 
          style={{ 
            width: '3.5rem', 
            height: '3.5rem'
          }}
        />

        <div>
          <p className='text-base font-bold truncate'>Oluwadarasimi</p>
          <p className='text-sm truncate'>dara@gmail.com</p>
        </div>
      </div>
      
      <div className='flex flex-col gap-2'>
        {
          navigation.map(eachLink => {
            return (
              <Link href={eachLink.path} key={eachLink.name} onClick={() => setActiveLink(eachLink)} className={`transition-all nav-links gap-4 flex items-center text-base ${activeLink === eachLink ? 'active-navlink' : null }`}>
                <i className={`${eachLink.icon}`} style={{ fontSize: '1.25rem', lineHeight: 0}}></i>
                {eachLink.name}
              </Link>
            )
          })
        }
      </div>
      <div className='flex items-center gap-4 text-base nav-links cursor-pointer' style={{
        marginTop: 'auto',
        height: '3.5rem',
        padding: '1rem'
      }}>
          <Image src={Logout} alt='logout' />
          Logout
        </div>
    </div>
  )
}
