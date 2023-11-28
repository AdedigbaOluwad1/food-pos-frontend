import React from 'react'

export default function Input({ title, placeholder, type }: { title: string, placeholder: string, type: 'email' | 'password' | 'number' | 'text' }) {
  return (
    <div className='w-full flex flex-col gap-2'>
        <p className='text-primary text-base font-bold'>{title}</p>
        <input type={type} className='h-12 w-full py-3 px-4 text-primary font-medium text-base' placeholder={placeholder} style={{ 
            borderRadius: 12,
            border: '1px solid #E3E8EF',
            boxShadow: 'none',
            outline: 0
            }} 
        />
    </div>
  )
}
