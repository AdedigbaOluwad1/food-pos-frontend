import React from 'react'
import Input from '../general/input'
import Image from 'next/image'
import item from '@/assets/product-images/item.png'
import { Button } from '@mui/material'
import deleteIcon from '@/assets/icons/delete-icon.svg'

export default function Item() {
  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='flex gap-4 justify-between items-center'>
        <div className='flex items-center w-full gap-2'>
            <Image 
                src={item} 
                alt='item' 
                style={{
                    width: '45px',
                    borderRadius: '50%'
                }} 
            />
            <div className='flex flex-col gap-2'>
                <h5 className='text-sm font-medium'>
                    Spicy and seasoned soy..
                </h5>

                <p className='text-xs text-[#ABBBC2] font-medium'>
                    $ 2.29
                </p>
            </div>

            <Input
                value={2} 
                sx={{
                    width: '40px !important',
                    ml: 'auto',
                    '& .MuiOutlinedInput-root': {
                        height: 40,
                        minHeight: 40,
                        textAlign: 'center',
                        '& input': {
                            textAlign: 'center'
                        }
                    }
                }} 
            />
        </div>

        <div
            className='flex items-center justify-center'
            style={{
                width: '20%'
            }}
        >
            <h4 className='font-medium text-base'>
                $ 4.58
            </h4> 
        </div>
      </div>

      <div className='flex gap-4 justify-between items-center'>
        <div className='w-full'>
            <Input value={'Please add a little spice'} fullWidth />  
        </div>
       
        <div className='flex items-center justify-center' style={{
            width: '20%'
        }}>
            <Button
                variant='outlined' 
                sx={{
                    minWidth: '40px',
                    minHeight: '40px',
                    borderColor: '#EA7C69 !important',
                    borderRadius: '8px',
                    color: '#EA7C69 !important',
                    padding: 0
                }}
            >
                <Image src={deleteIcon} alt='delete' />
            </Button>
        </div>
      </div>
    </div>
  )
}
