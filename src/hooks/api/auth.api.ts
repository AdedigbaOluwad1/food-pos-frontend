import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/router"
import { IUser, IBackendResponse } from "@/data/data"
import { useEffect, useState } from "react"

const useAuthApi = () => {
    const router = useRouter()
    const [user, setUser] = useState<IUser>()
    const login = async (email: string, password: string) => {
        const res = axios.post(process.env.NEXT_PUBLIC_API_BASE_URL! + '/auth/login', {
            email,
            password
        })
        .then((e) => {
            sessionStorage.setItem('user', JSON.stringify(e.data.response))
            router.replace('/dashboard')
        })

        toast.promise(res, {
            loading: 'Logging you in...',
            error: ((e) => e.response.data.message ?? 'An error occurred'),
            success: 'Welcome back to ChowHub!'
        })
    }

    const signup = async (email: string, password: string, firstName: string, lastName: string, confirmPassword: string) => {
        const res = axios.post(process.env.NEXT_PUBLIC_API_BASE_URL! + '/auth/signup', {
            email,
            password,
            confirmPassword,
            firstName,
            lastName
        })
        .then((e) => {
            sessionStorage.setItem('user', JSON.stringify(e.data.response))
            router.replace('/auth/login')
        })

        toast.promise(res, {
            loading: 'Creating your account...',
            error: ((e) => e.response.data.message ?? 'An error occurred'),
            success: 'Account created successfully. Now login!'
        })
    }

    const useAuth =  () => {
        useEffect(() => { 
            const user: IUser = String(sessionStorage.getItem('user')) ? JSON.parse(String(sessionStorage.getItem('user'))) : null
            
            if (!user){
                router.replace('/auth/login')
                toast.error('Kindly login to access this page')
            } else {
                setUser(user)
            }
        }, [])

        return { user }
    }

    const logout = async () => {
        const user: IUser = JSON.parse(String(sessionStorage.getItem('user')))
        const res = axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL! + '/auth/logout', {
            headers: {
                'accept': 'text/plain',
                'Authorization': `Bearer ${user.authorizationToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            router.replace('/auth/login')
            sessionStorage.removeItem('user')
        })

        toast.promise(res, {
            loading: 'Logging out...',
            success: 'You have been logged out successfully!',
            error: (e) => { return e.response.data.message ?? 'An error occurred' }
        })
    }

    return {
        login,
        signup,
        logout,
        useAuth
    }
}

export default useAuthApi