import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('An email is required'),
    password: yup.string().min(6, 'Password must contain at least 6 characters').required('A password is required')
})

export default loginSchema