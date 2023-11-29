import React from 'react'
import Login from './login'

export default function Index() {
  return (
    <div className='bg-primary min-h-screen px-6 py-10 flex items-center justify-center'>
      <div className='w-full max-w-lg bg-light h-[400px] p-6 md:p-8 flex items-center' style={{
        borderRadius: 12
      }}>
        <Login />
      </div>
    </div>
  )
}

