import React, { useState } from 'react'
import { Drawer, IconButton, Button } from '@mui/material'
import chevronLeft from '@/assets/icons/chevron-left.svg'
import Image from 'next/image'
import iconPlus from '@/assets/icons/icon-pluss.svg'
import Item from './item'

export default function ConfirmationSlide() {
    const [ open, setOpen ] = useState(true)
  return (
    <Drawer open={open} anchor='right' sx={{
        '& .MuiPaper-root': {
            outline: 0,
            boxShadow: 'none',
            border: 0,
            background: 'transparent !important'
        }
    }}>
        <div 
            className='bg-primary text-light h-full grid' 
            style={{
                gridTemplateRows: '1fr',
                gridTemplateColumns: '26.65rem 26.6rem',
                borderRadius: '16px 0 0 16px',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <div className='p-6 border-r border-[#393C49]'>
                <div className='grid gap-4' style={{
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: 'auto auto 1fr auto',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100vh'
                }}>
                    <IconButton disableRipple sx={{
                        p: 0,
                        width: 'fit-content',
                    }}>
                        <Image src={chevronLeft} alt='' className='w-6 h-6' />
                    </IconButton>

                    <div className='flex items-center justify-between pb-6 border-b border-[#393C49]'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-medium text-[1.75rem]'>Confirmation</h4>
                            <p className='font-medium text-[#ABBBC2] text-base'>Orders #34562</p>
                        </div>

                        <Button 
                            variant='contained' 
                            disableElevation
                            className='bg-secondary min-w-12 min-h-12'
                            sx={{
                                borderRadius: '8px',
                                minWidth: '3rem',
                                minHeight: '3rem',
                                width: '3rem',
                                p: 0,
                                background: '#EA7C69 !important'
                            }}
                        >
                            <Image src={iconPlus} alt='' className='w-5 h-5' />
                        </Button>
                    </div>

                    <div className='my-2 flex flex-col gap-6 hide-scrollbar' style={{
                        overflowY: 'auto',
                        gridRow: '1fr',
                    }}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>

                    <div className='border-t h-12 flex flex-col gap-4 text-light border-[#393C49] pt-6 pb-6' style={{
                        minHeight: '8rem'
                    }}>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-[#ABBBC2]'>
                                Discount
                            </p>
                            <p className='text-sm text-light'>
                                $0
                            </p>
                        </div>

                        <div className='flex items-center pb-6 justify-between'>
                            <p className='text-sm text-[#ABBBC2]'>
                                Sub total
                            </p>
                            <p className='text-sm text-light'>
                                $20,003
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </Drawer>
  )
}
