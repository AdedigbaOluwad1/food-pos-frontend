import React, { useState } from 'react'
import { Button } from '@mui/material'
import Item from './item'
import ConfirmationSlide from './confirmation-slide'

export default function SidebarMini() {
    const [confirmationSlide, setConfirmationSlide] = useState(false)
  return (
    <div 
        className='bg-primary h-full flex gap-6 flex-col'
        style={{
            padding: '1.5rem',
            borderRadius: '8px 0 0 8px',
            gridRow: 1
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
           <div className='flex items-center w-full'>
                <h4 className='text-base font-semibold'>
                    Item
                </h4> 

                <h4 className='text-base font-semibold' style={{
                    marginLeft: 'auto',
                    width: 40,
                    textAlign: 'center'
                }}>
                    Qty
                </h4> 
            </div>

            <div
                className='flex items-center justify-center'
                style={{
                    width: '20%'
                }}
            >
                <h4 className='text-base font-semibold'>
                    Price
                </h4> 
            </div>
            
        </div>

        <div className='w-full flex flex-col gap-6 relative'>
            <Item />
            <Item />
            <Item />
        </div>
        
        <div
            className='flex flex-col gap-4'
            style={{
                marginTop: 'auto'
            }}
        >
            <div className='flex items-center justify-between'>
                <p className='text-sm text-[#ABBBC2]'>
                    Discount
                </p>
                <p className='text-sm text-light'>
                    $0
                </p>
            </div>

            <div className='flex items-center justify-between'>
                <p className='text-sm text-[#ABBBC2]'>
                    Sub total
                </p>
                <p className='text-sm text-light'>
                    $20,003
                </p>
            </div>
            <Button 
                className='h-12 mt-[1.625rem] w-full text-sm font-semibold normal-case'
                variant='contained'
                disableElevation
                onClick={() => setConfirmationSlide(true)}
                sx={{
                    background: '#EA7C69 !important',
                    boxShadow: '0px 8px 24px 0px rgba(234, 124, 105, 0.30)',
                    borderRadius: '8px'
                }}
            >
                Continue to Payment
            </Button>

            <ConfirmationSlide onClose={(e) => setConfirmationSlide(e)} open={confirmationSlide} />
        </div>
    </div>
  )
}
