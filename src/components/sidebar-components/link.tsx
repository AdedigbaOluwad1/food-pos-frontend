import React, { ReactSVGElement } from 'react'
import Image from 'next/image'
import activeLinkBg from '@/assets/icons/active-link-bg.svg'

interface props {
    icon: string,
    activeIcon: string,
    active: boolean,
    link: string
}

export default function SideBarLink(props: props) {
  return (
    <div 
        className='flex items-center justify-center' 
        style={{
            height: '6.375rem',
            width: '5.75rem',
            position: 'relative',
            cursor: 'pointer'
        }}
    >
        { props.active ? 
            <Image 
                src={activeLinkBg} 
                alt='bg-active' 
                style={{
                    width: '100%',
                    height: '100%'
                }} 
            /> 
                :
            null 
        }

        <div 
            className='items-center justify-center flex' 
            style={{
                position: 'absolute',
                marginRight: '0.75rem',
                width: '3.5rem',
                height: '3.5rem',
                background: props.active ? '#EA7C69' : 'transparent',
                borderRadius: '8px',
                boxShadow: props.active ? '0px 8px 24px 0px rgba(234, 124, 105, 0.32)' : 'none'
            }}
        >
            <Image 
                src={
                    props.active ? props.activeIcon : props.icon
                } 
                alt='' 
                style={{
                    width: '1.25rem',
                    height: '1.25rem'
                }}
            />
        </div>
      </div>
  )
}
