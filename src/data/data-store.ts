import { navLink } from './data'
import homeIcon from '@/assets/icons/home-icon.svg'
import homeIconActive from '@/assets/icons/home-icon-active.svg'
import discountIcon from '@/assets/icons/discount-icon.svg'
import discountIconActive from '@/assets/icons/discount-icon-active.svg'
import statsReport from '@/assets/icons/graph-icon.svg'
import statsReportActive from '@/assets/icons/graph-icon-active.svg'
import messageIcon from '@/assets/icons/message-icon.svg'
import messageIconActive from '@/assets/icons/message-icon-active.svg'
import notificationIcon from '@/assets/icons/notification-icon.svg'
import notificationIconActive from '@/assets/icons/notification-icon-active.svg'
import settingsIcon from '@/assets/icons/setting-icon.svg'
import settingsIconActive from '@/assets/icons/setting-icon-active.svg'

export const navLinks: navLink[] = [
    { 
        name: 'Home',
        path: '/dashboard',
        activeIcon: homeIconActive,
        icon: homeIcon,
    },
    { 
        name: 'Discount',
        path: '/discount',
        activeIcon: discountIconActive,
        icon: discountIcon,
    },
    { 
        name: 'Report',
        path: '/report',
        activeIcon: statsReportActive,
        icon: statsReport,
    },
    { 
        name: 'Inbox',
        path: '/inbox',
        activeIcon: messageIconActive,
        icon: messageIcon,
    },
    { 
        name: 'Notifications',
        path: '/notifications',
        activeIcon: notificationIconActive,
        icon: notificationIcon,
    },
    { 
        name: 'Settings',
        path: '/settings',
        activeIcon: settingsIconActive,
        icon: settingsIcon,
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