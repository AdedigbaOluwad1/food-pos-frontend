import { navLink } from './data'

export const navigation: navLink[] = [
    { 
        name: 'Dashboard',
        icon: 'bi bi-house',
        path: '/dashboard'
    },
    { 
        name: 'Invoices',
        icon: 'bi bi-coin',
        path: '/invoice'
    },
    { 
        name: 'Notifications',
        icon: 'bi bi-bell',
        path: '/notifications'
    },
    { 
        name: 'Products',
        icon: 'bi bi-tag',
        path: '/dashboard'
    },
    { 
        name: 'Customers',
        icon: 'bi bi-people',
        path: '/dashboard'
    },
]

export const dummyUsers = [
    {
        userName: 'Adedigba Oluwadarasimi',
        email: 'boatech4good@gmail.com',
    },
    {
        userName: 'Unique Feyi',
        email: 'good@gmail.com',
    },
    // {
    //     userName: 'Klusterthon Hackathon',
    //     email: 'klusterthon@gmail.com',
    // },
]

export const dummyInvoice = [
    {
        refNo: '20220131-001',
        userName: 'Klusterthon Team',
        status: 'Paid'
    },
    {
        refNo: '20220130-031',
        userName: 'Klusterthon Team',
        status: 'Paid'
    },
    {
        refNo: '20220131-201',
        userName: 'Adedigba Oluwadarasimi',
        status: 'Paid'
    },
]