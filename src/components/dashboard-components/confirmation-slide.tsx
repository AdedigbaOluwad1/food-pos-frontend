import React, { useState, useEffect } from 'react'
import { Drawer, IconButton, Button, Dialog } from '@mui/material'
import chevronLeft from '@/assets/icons/chevron-left.svg'
import Image from 'next/image'
import iconPlus from '@/assets/icons/icon-pluss.svg'
import Item from '@/components/dashboard-components/item'
import PaymentMethod from '@/components/dashboard-components/payment-method'
import payPalIcon from '@/assets/icons/paypal-icon.svg'
import creditCardIcon from '@/assets/icons/credit-card-icon.svg'
import walletIcon from '@/assets/icons/wallet-icon.svg'
import Input from '../general/input'
import toast from 'react-hot-toast'

interface props {
    open: boolean,
    onClose: (param: boolean) => void
}

export default function ConfirmationSlide(props: props) {
    const [ open, setOpen ] = useState(props.open)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'Credit Card' | 'Cash' | 'Paypal'>('Credit Card')

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    const handlePaymentConfirmation = () => {
        toast.success('Payment confirmed successfully!')
        setOpen(false)
        props.onClose(false)
    }

  return (
    <Drawer 
        open={open} 
        anchor='right' 
        onClose={() => {
            setOpen(false);
            props.onClose(false)
        }}
        sx={{
            '& .MuiPaper-root': {
                outline: 0,
                boxShadow: 'none',
                border: 0,
                background: 'transparent !important'
            }
        }}
    >
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
                <div 
                    className='grid gap-4' 
                    style={{
                        gridTemplateColumns: '1fr',
                        gridTemplateRows: 'auto auto 1fr auto',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100vh'
                    }}
                >
                    <IconButton 
                        disableRipple
                        onClick={() => {
                            setOpen(false);
                            props.onClose(false)
                        }}
                        sx={{
                            p: 0,
                            width: 'fit-content',
                        }}
                    >
                        <Image 
                            src={chevronLeft} 
                            alt='' 
                            className='w-6 h-6' 
                        />
                    </IconButton>

                    <div className='flex items-center justify-between pb-6 border-b border-[#393C49]'>
                        <div className='flex flex-col gap-1.5'>
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

                    <div 
                        className='border-t h-12 flex flex-col gap-4 text-light border-[#393C49] pt-6 pb-6' 
                        style={{
                            minHeight: '8rem'
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

            <div className='p-6 grid gap-6 h-screen'
                style={{
                    gridTemplateRows: 'auto 1fr auto'
                }}
            >
                <div className='flex flex-col gap-1.5 mt-[2.5rem] border-b border-[#393C49] pb-6'>
                    <h4 className='font-medium text-[1.75rem]'>Payment</h4>
                    <p className='font-medium text-[#ABBBC2] text-base'>3 payment methods available</p>
                </div>
                <div 
                    className='flex hide-scrollbar flex-col gap-6'  
                    style={{
                        overflowY: 'auto',
                        height: '100%'
                    }}  
                >
                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>
                            Payment Method
                        </h5>
                        <div className='flex flex-wrap gap-2'>
                            <PaymentMethod 
                                isSelected={selectedPaymentMethod === 'Credit Card'} 
                                onClick={(e) => setSelectedPaymentMethod(e)} 
                                methodName='Credit Card' 
                                icon={creditCardIcon} 
                            />
                            <PaymentMethod 
                                isSelected={selectedPaymentMethod === 'Paypal'} 
                                onClick={(e) => setSelectedPaymentMethod(e)} 
                                methodName='Paypal' 
                                icon={payPalIcon} 
                            />
                            <PaymentMethod
                                isSelected={selectedPaymentMethod === 'Cash'}
                                onClick={(e) => setSelectedPaymentMethod(e)} 
                                methodName='Cash' 
                                icon={walletIcon}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h5 className='text-sm font-medium'>
                            Cardholder Name
                        </h5>
                        <Input placeholder='Ex. David Stewart' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h5 className='text-sm font-medium'>
                            Card Number
                        </h5>
                        <Input placeholder='Ex. 2564 1421 0897 1244' />
                    </div>

                    <div className='flex gap-[0.875rem] pb-4 border-b border-[#393C49]'>
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-sm font-medium'>
                                Expiration Date
                            </h5>
                            <Input placeholder='Ex. 02/2022' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h5 className='text-sm font-medium'>
                                CVV
                            </h5>
                            <Input placeholder='Ex. 123' />
                        </div>
                    </div>

                    <div className='flex gap-[0.875rem] mt-[-0.5rem]'>
                        <div className='flex flex-col gap-2'>
                            <h5 className='text-sm font-medium'>
                                Order Type
                            </h5>
                            <Input placeholder='Dine In' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h5 className='text-sm font-medium'>
                                Table no.
                            </h5>
                            <Input placeholder='102' />
                        </div>
                    </div>
                </div>
                <div className='mt-auto flex gap-2'>
                    <Button
                        variant='outlined'
                        className='h-12 w-full normal-case text-sm font-semibold text-secondary border-secondary rounded-[8px] hover:border-secondary'
                    >
                        Cancel
                    </Button>

                    <Button
                        variant='contained'
                        disableElevation
                        onClick={handlePaymentConfirmation}
                        className='h-12 w-full normal-case text-sm font-semibold bg-secondary hover:bg-secondary rounded-[8px] shadow-2xl'
                    >
                        Confirm Payment
                    </Button>
                </div>
            </div>
        </div>
    </Drawer>
  )
}
