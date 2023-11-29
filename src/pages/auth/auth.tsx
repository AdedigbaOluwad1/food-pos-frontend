import React from 'react'
import Login from './login'
import SignUp from './sign-up'

export default function Auth() {
  return (
    <div className='bg-primary min-h-screen px-6 py-10 flex items-center justify-center'>
      <div className='w-full max-w-lg bg-light min-h-[400px] p-6 py-12 md:px-8  flex items-center' style={{
        borderRadius: 12
      }}>
        <Login />
        <SignUp />
      </div>
    </div>
  )
}

