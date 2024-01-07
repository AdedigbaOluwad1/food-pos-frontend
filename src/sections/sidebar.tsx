import React, { useState } from 'react'
import { navLink } from '@/data/data'
import { navLinks } from '@/data/data-store'
import SideBarLink from '@/components/sidebar-components/link'
import Logo from '@/components/general/logo'
import Image from 'next/image'
import logoutIcon from '@/assets/icons/logout-icon.svg'
import useAuthApi from '@/hooks/api/auth.api'

export default function SideBar() {
    const [activeLink, setActiveLink] = useState<navLink>(navLinks[0])
    const { logout } = useAuthApi()

    return (
        <div 
            className='min-h-screen flex items-center flex-col bg-primary' 
            style={{
                gap: '1rem',
                zIndex: 10,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                width: 'full',
                borderRadius: '0 1rem 1rem 0'
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
            {
                navLinks.map((e) => {
                    return (
                        <SideBarLink 
                            key={e.name}
                            active={activeLink === e ? true : false} 
                            name={e.name}
                            activeIcon={e.activeIcon} 
                            icon={e.icon} 
                            path={e.path} 
                            onClick={() => setActiveLink(e)} 
                        />
                    )
                })
            }
        </div>

        <button onClick={() => logout()} style={{
            padding: '1rem',
            marginTop: 'auto'
        }}>
            <Image src={logoutIcon} alt='logout' style={{
                width: '1.25rem',
                height: '1.25rem'
            }} />
        </button>
        </div>
    )
}
