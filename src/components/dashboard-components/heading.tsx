import React from 'react'

interface props {
    primary: string,
    secondary: string
}

export default function Heading(props: props) {
  return (
    <div 
        className='flex flex-col' 
        style={{
            width: 'fit-content',
            gap: '0.25rem'
        }}
    >
        <h1 
            className='font-bold' 
            style={{
                fontSize: '1.75rem',
                lineHeight: '140%'
            }}
        >
            {props.primary}
        </h1>
        <h4
            style={{
                fontSize: '1rem',
                lineHeight: '140%'
            }} 
        >
            {props.secondary}
        </h4>
    </div>
  )
}
