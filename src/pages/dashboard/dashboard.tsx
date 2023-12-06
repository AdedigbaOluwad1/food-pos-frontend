import React from 'react'
import DashboardLayout from '@/layouts/dashboard-layout'
import useGetInvoice from '@/hooks/useGetInvoices'
import { useSelector, useDispatch } from 'react-redux'
import useGetProducts from '@/hooks/useGetProducts'
import Heading from '@/components/dashboard-components/heading'
import SearchBar from '@/components/dashboard-components/searchbar'
import SidebarMini from '@/components/dashboard-components/sidebar-mini'
import Tabs from '@/components/dashboard-components/tabs'

export default function Dashboard() {
  const dispatch = useDispatch()
  const productApiRes = useGetProducts()
  const invoiceApiRes = useGetInvoice( '', '', '')
  const state = useSelector((e) => e)

  return (
    <DashboardLayout>
      <div
        className='flex flex-1'
      >
        <div 
          className='w-full flex flex-col' 
          style={{
            gap: '1.5rem',
            paddingRight: '1.5rem',
            minHeight: '100%'
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
                }
              ]
            } 
            onChange={(e) => console.log(e) } 
          />
        </div>

        <SidebarMini />
      </div>
    </DashboardLayout>
  )
}