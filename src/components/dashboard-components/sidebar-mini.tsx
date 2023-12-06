import React from 'react'
import { Button } from '@mui/material'
import Item from './item'

export default function SidebarMini() {
  return (
    <div 
        className='bg-primary flex gap-6 flex-col'
        style={{
            width: '34.25%',
            margin: '-1.5rem -1.5rem -1.5rem 0',
            padding: '1.5rem'
        }}
    >
        <h4 className='text-xl font-semibold'>
            Orders #34562
        </h4>

        <div className='flex gap-3'>
            <Button
                className='sidebar-mini-button'
                variant='contained'
                disableElevation
                sx={{
                    background: '#EA7C69 !important',
                }}
            >
                Dine In
            </Button>

            <Button
                className='sidebar-mini-button'
                variant='outlined'
                disableElevation
                sx={{
                    background: 'transparent !important',
                    border: '1px solid #393C49 !important',
                    color: '#EA7C69'
                }}
            >
                To Go
            </Button>

            <Button
                className='sidebar-mini-button'
                variant='contained'
                disableElevation
                sx={{
                    background: 'transparent !important',
                    border: '1px solid #393C49 !important',
                    color: '#EA7C69'
                }}
            >
                Delivery
            </Button>
        </div>

        <div 
            className='flex items-center gap-4 justify-between pb-6'
            style={{
                borderBottom: '1px solid #393C49'
            }}
        >
           <h4 className='w-full font-semibold'>
                Item
            </h4> 

            <h4 className=' w-12 font-semibold'>
                Qty
            </h4> 

            <h4 className='w-12 font-semibold'>
                Price
            </h4> 
        </div>

        <div>
            <Item />
        </div>
        
    </div>
  )
}
