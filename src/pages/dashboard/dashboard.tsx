import React from 'react'
import DashboardLayout from '@/layouts/dashboard-layout'
import useGetInvoice from '@/hooks/useGetInvoices'
import { useSelector, useDispatch } from 'react-redux'
import Heading from '@/components/dashboard-components/heading'
import SearchBar from '@/components/dashboard-components/searchbar'
import SidebarMini from '@/components/dashboard-components/sidebar-mini'
import Tabs from '@/components/dashboard-components/tabs'
import Dishes from '@/components/dashboard-components/dishes'
import useGetDishes from '@/hooks/api/useGetDishes'
import { updateSelectedDishCategory } from '@/store/dashboardReducer'

export default function Dashboard() {
    const dispatch = useDispatch()
    const { loading } = useGetDishes()

    const handleDishCategoryChange = (e: string | undefined) => {
        dispatch(updateSelectedDishCategory(e))
    }

    return (
        <DashboardLayout>
            <div
                className='grid flex-1 relative justify-between'
                style={{
                gridTemplateColumns: '1fr 28rem',
                gridTemplateRows: '1fr',
                height: 'calc(100vh)'
                }}
            >
                <div 
                className='w-full h-full flex flex-col' 
                    style={{
                        gap: '1.5rem',
                        padding: '1.5rem',
                        minHeight: '100%',
                        gridRow: 1,
                        gridColumn: 1,
                        overflowY: 'hidden'
                    }}
                >
                    <div 
                        className='flex w-full items-center justify-between'
                    >
                        <Heading 
                        primary='Dashboard' 
                        secondary={ 
                            new Date().toLocaleDateString('en-GB', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                            }
                        )} 
                        />

                        <SearchBar />
                    </div>
                    <div>
                        <Tabs 
                            tabOptions={
                                [ 
                                    {
                                        tabName: 'Hot Dishes', 
                                        tabValue: 1
                                    },
                                    {
                                        tabName: 'Cold Dishes', 
                                        tabValue: 2
                                    },
                                    {
                                        tabName: 'Appetizers', 
                                        tabValue: 3
                                    },
                                    {
                                        tabName: 'Dessert', 
                                        tabValue: 4
                                    },
                                    {
                                        tabName: 'Salads', 
                                        tabValue: 5
                                    },
                                    {
                                        tabName: 'Pasta', 
                                        tabValue: 6
                                    },
                                    {
                                        tabName: 'Seafood', 
                                        tabValue: 7
                                    }
                                ]
                            } 
                            onChange={(e) => handleDishCategoryChange(e)} 
                        />  
                    </div>

                    <Dishes loading={loading} />
                </div>

                <SidebarMini />
            </div>
        </DashboardLayout>
    )
}