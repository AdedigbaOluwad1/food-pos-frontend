import React from 'react'
import Logo from '@/components/general/logo'
import Input from '@/components/general/input'
import { Button } from '@mui/material'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import signUpSchema from '@/schemas/signup-validation.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuthApi from '@/hooks/api/auth.api'

export default function SignUp() {
    const { signup } = useAuthApi()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema)
    })

    return (
        <div className='min-h-screen flex items-center justify-center py-10'>
            <div 
                className='bg-primary-bg py-10 px-8 gap-4 flex-1 max-w-[470px] rounded-md border flex flex-col items-center'
                style={{
                    borderColor: 'rgba(227, 232, 239, 0.08)'
                }}
            >
                <Logo />
                <div className='w-full flex flex-col items-center gap-1'>
                    <h4 className='text-2xl font-bold'>
                        Signup for ChowHub
                    </h4>
                    <p className='text-sm opacity-80'>
                        Fill in the form to create an account with ChowHub!
                    </p>
                </div>

                <form onSubmit={handleSubmit((e) => signup(e.email, e.password as string, e.firstName, e.lastName, e.confirmPassword as string,))} className='w-full flex flex-col gap-6'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-sm text-light opacity-70'>
                            First Name
                        </p>
                        <Input fullWidth placeholder='Ex. Paul' type='text' {...register('firstName')} />
                        { 
                            errors.firstName 
                                && 
                            <p className='text-xs opacity-70'>
                                {errors.firstName.message}
                            </p>
                        }
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-sm text-light opacity-70'>
                            Last Name
                        </p>
                        <Input fullWidth placeholder='Ex. White' type='text' {...register('lastName')} />
                        { 
                            errors.lastName 
                                && 
                            <p className='text-xs opacity-70'>
                                {errors.lastName.message}
                            </p>
                        }
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-sm text-light opacity-70'>
                            Email
                        </p>
                        <Input fullWidth placeholder='yourname@gmail.com' type='email' {...register('email')} />
                        { 
                            errors.email 
                                && 
                            <p className='text-xs opacity-70'>
                                {errors.email.message}
                            </p>
                        }
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-sm text-light opacity-70'>
                            Password
                        </p>
                        <Input fullWidth placeholder='••••••••••••' type='password' {...register('password')} />
                        { 
                            errors.password 
                                && 
                            <p className='text-xs opacity-70'>
                                {errors.password.message}
                            </p>
                        }
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-sm text-light opacity-70'>
                            Confirm Password
                        </p>
                        <Input fullWidth placeholder='••••••••••••' type='password' {...register('confirmPassword')} />
                        { 
                            errors.confirmPassword 
                                && 
                            <p className='text-xs opacity-70'>
                                {errors.confirmPassword.message}
                            </p>
                        }
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-light opacity-70'>
                                Already have an account?
                            </p>

                            <p className='text-sm underline text-secondary opacity-90'>
                                Login
                            </p>
                        </div>
                    </div>

                    <Button
                        type='submit'
                        variant='contained'
                        disableElevation
                        className='h-12 mt-4 w-full normal-case text-sm font-semibold bg-secondary hover:bg-secondary rounded-[8px] shadow:2xl hover:shadow-2xl'
                    >
                        Signup
                    </Button>
                </form>
            </div>
        </div>
    )
}
