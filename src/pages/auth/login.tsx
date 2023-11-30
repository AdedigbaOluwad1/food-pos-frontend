import React, { useState } from 'react'
import Input from '@/components/input'
import { useSelector, useDispatch } from 'react-redux'
import { stateValue } from '@/data/data'
import { updateUserLevel } from '@/store/general-app-state'
import axios from 'axios'

export default function Login() {
    const state = useSelector(({ generalState }: { generalState: stateValue }) => generalState)
    const dispatch = useDispatch()
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const updateState = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>, levelValue: 'sign-up' | 'login' | 'dashboard') => {
        e.preventDefault()
        dispatch(updateUserLevel(levelValue))

        if(levelValue === 'login'){
            const res = axios.post('')
        }
    }
  return (
    <div className={`w-full ${state.sysLevel === 'login' ? 'flex' : 'hidden'} flex-col gap-3 transition-all`}>
        <div className='flex flex-col gap-2 mb-3'>
            <h3 className='text-primary font-bold text-[1.5rem] leading-[100%]'>Login</h3>
            <p className='text-grey text-base leading-[100%]'>Kindly login to proceed to our app</p>
        </div>
        
        <form onSubmit={(e) => updateState(e, 'login')} className='w-full flex flex-col gap-3'>
            <Input 
                required 
                emmitValue={(e: string) => setFormState((prevState) => ({...prevState, email: e}))}
                title='Email'
                placeholder='Enter your email address' 
                type='email' 
            />

            <Input 
                emmitValue={(e: string) => setFormState((prevState) => ({...prevState, password: e}))}
                title='Password' 
                required
                placeholder='Enter your password' 
                type='password' 
            />

            <div className='flex items-center justify-between'>
                <p className='text-grey text-sm'>{`Don't have an account yet?`}</p>
                <button 
                    onClick={(e) => updateState(e, 'sign-up')} 
                    className='text-primary text-sm font-bold underline'
                >
                    Sign up
                </button>
            </div>
            
            <input 
                className='bg-primary w-full text-base h-12 mt-5 cursor-pointer' 
                value={'Login'} 
                type='submit' 
                style={{ 
                    borderRadius: 12 
                }} 
            />
        </form>
    </div>
  )
}
