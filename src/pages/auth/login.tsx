import React from 'react'
import Input from '@/components/input'

export default function Login() {
  return (
    <div className='w-full flex flex-col gap-3'>
        <div className='flex flex-col gap-2 mb-3'>
            <h3 className='text-primary font-bold text-[1.5rem] leading-[100%]'>Login</h3>
            <p className='text-grey text-base leading-[100%]'>Kindly login to proceed to our app</p>
        </div>
        
        <form className='w-full flex flex-col gap-3'>
            <Input title='Email' placeholder='Enter your email address' type='email' />
            <Input title='Password' placeholder='Enter your password' type='password' />
            <input className='bg-primary w-full text-base h-12 mt-5' value={'Login'} type='submit' style={{ borderRadius: 12 }} />
        </form>
        

    </div>
  )
}
