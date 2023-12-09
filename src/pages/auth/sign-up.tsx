import React, { useEffect, useState } from 'react'
import Input from '@/components/input'
import { useSelector, useDispatch } from 'react-redux'
import { stateValue } from '@/data/data'
import { updateUserLevel } from '@/store/appReducer'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function SignUp() {
  const state = useSelector(({ generalState }: { generalState: stateValue }) => generalState)
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  async function signUp(){
    const res = axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/users', {
      email: formState.email,
      firstName: formState.firstName,
      lastName: formState.lastName
    })
    .then(() => {
      setFormState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      })
      dispatch(updateUserLevel('login'))
    })

    toast.promise(res, {
      error: (err) => `${err.response.data.message}`,
      loading: 'Creating an account..',
      success: 'Account created successfully!'
    }, {
      success: {
        duration: 5000
      }
    })
  }
  
  const updateState = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>, levelValue: 'sign-up' | 'login' | '') => {
    e.preventDefault()
    dispatch(updateUserLevel(levelValue))
    
    if (levelValue === 'sign-up'){
      signUp()
    }
  }
 
  return (
    <div className={`w-full ${state.sysLevel === 'sign-up' ? 'flex' : 'hidden'} flex-col gap-3 transition-all`}>
        <div className='flex flex-col gap-2 mb-3'>
          <h3 className='text-primary font-bold text-[1.5rem] leading-[100%]'>SignUp</h3>
          <p className='text-grey text-base leading-[100%]'>Kindly fill the form to create an account</p>
        </div>
        
        <form onSubmit={(e) => updateState(e, 'sign-up')} className='w-full flex flex-col gap-3'>
          <Input 
            emmitValue={(e: string) => setFormState((prevState) => ({...prevState, firstName: e}))} 
            required 
            value={formState.firstName}
            title='First Name' 
            placeholder='Enter your first name' 
            type='text' 
          />

          <Input 
            emmitValue={(e: string) => setFormState((prevState) => ({...prevState, lastName: e}))} 
            required 
            value={formState.lastName}
            title='Last Name' 
            placeholder='Enter your Last name' 
            type='text' 
          />
          <Input 
            emmitValue={(e: string) => setFormState((prevState) => ({...prevState, email: e}))} 
            required 
            value={formState.email}
            title='Email' 
            placeholder='Enter your email address' 
            type='email' 
          />

          <Input 
            emmitValue={(e: string) => setFormState((prevState) => ({...prevState, password: e}))} 
            required
            value={formState.password} 
            title='Password' 
            placeholder='Enter your password' 
            type='password' 
          />

          <div className='flex items-center justify-between'>
            <p className='text-grey text-sm'>{`Already have an account?`}</p>
            <button onClick={(e) => updateState(e, 'login')} className='text-primary text-sm font-bold underline'>Login</button>
          </div>
            
          <input className='bg-primary w-full text-base h-12 mt-5 cursor-pointer' value={'Sign up'} type='submit' style={{ borderRadius: 12 }} />
        </form>
    </div>
  )
}
