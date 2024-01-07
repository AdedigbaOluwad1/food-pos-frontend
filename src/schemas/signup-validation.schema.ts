import * as yup from 'yup'

const signUpSchema = yup.object().shape({
    firstName: yup.string().required('Firstname is required'),
    lastName: yup.string().required('Lastname is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password must contain at least 6 characters').max(16, 'Password should not be more that 16 characters'),
    confirmPassword: yup.string().min(6, 'Password must contain at least 6 characters').max(16, 'Password should not be more that 16 characters')
})

export default signUpSchema