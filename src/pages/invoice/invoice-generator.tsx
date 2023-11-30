import bgVector from '@/assets/bg-vector(1).png'
import Logo from '@/assets/Logo.png'
import Image from 'next/image'
import OrderItem from '@/components/order-item'
import Ticket from '@/assets/ticket-discount.png'
import Input from '@/components/input'
import { useRouter } from 'next/router'
import axios from 'axios'
import PaymentMethod from '@/components/payment-method'
import ModalComponent from '@/components/modal'
import React from 'react'

function Invoice() {
    const router = useRouter()
    const { id } = router.query

    const pay = () => {
        axios.post(process.env.NEXT_PUBLIC_API_BASE_URL! + '/invoices/pay', {
            id: id
        })
        .then(e => console.log(e.data))
        .catch(e => console.log(e))
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit')
        pay()
    }

  return (
    <div className="flex flex-col lg:flex-row" style={{
        minHeight: '100vh'
    }}>
      <div className="lg:w-6/12 flex flex-col min-h-full bg-primary md:px-8 lg:pr-28 pt-6 pb-16 lg:pb-6 px-6" style={{
        backgroundImage: `url(${bgVector})`
      }}>
        <Image alt='logo' src={Logo} />

        <div className='self-center lg:self-end flex flex-col mt-16 w-full md:w-8/12 lg:w-11/12 gap-6 lg:max-w-lg'>
            <p className='text-2xl font-bold' style={{
                fontFamily: 'nunito'
            }}>
                Your Order
            </p>

            <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid #28303F',
                backdropFilter: 'blur(4px)',
                borderRadius: 12
            }}>
                <OrderItem lastItem={false} />
                <OrderItem lastItem />
            </div>

            <div className='flex w-full flex-col gap-2'>
                <p className='text-base font-bold' style={{
                    fontFamily: 'nunito'
                }}>
                    Discount Code
                </p>

                <div className='w-full flex items-center pb-8' style={{ 
                    position: 'relative',
                    borderBottom: '1px solid #28303F'
                }}>
                    <Image alt='icon' src={Ticket} style={{
                        position: 'absolute',
                        left: '0.75rem'
                    }} />
                    <input placeholder='Discount Code' className='w-full h-12 py-3 pl-11 text-base' style={{
                        background: 'transparent',
                        border: '1px solid #28303F',
                        borderRadius: 12,
                        outline: 0,
                        boxShadow: 'none',
                        fontWeight: 500
                    }} />
                    <button className='text-base font-bold' style={{
                        color: '#677489',
                        position: 'absolute',
                        right: '1rem'
                    }}>Apply</button>
                </div>
            </div>
            
            <div className='flex w-full pb-6 flex-col gap-3 text-base font-medium' style={{
                color: '#CDD5E0', 
                borderBottom: '1px solid #28303F'
            }}>
                <div className='flex justify-between w-full'>
                    <p>Subtotal</p> <p>$56.00</p>
                </div>

                <div className='flex justify-between w-full'>
                    <p>Shipping Cost</p> <p>$8.00</p>
                </div>

                <div className='flex justify-between w-full'>
                    <p>Discount(10%)</p> <p>-$13.00</p>
                </div>
            </div>

            <div className='flex justify-between w-full font-bold text-light'>
                <p>Total</p> <p>$51.00</p>
            </div>
        </div>
      </div>

      <div className='flex flex-col min-h-full lg:w-6/12 py-24 md:px-8 px-6 items-center justify-center'>
        <form onSubmit={(e) => submit(e)} className='flex flex-col gap-6 w-full md:w-8/12 lg:w-11/12 lg:max-w-lg'>
            <Input title='Email' type='email' placeholder='Enter your email' />
            <Input title='Phone number' type='number' placeholder='Enter your phone number' />
            <div className='flex flex-col gap-y-2 gap-x-3'>
                <div className='flex justify-between items-center' style={{
                    width: '100%'
                }}>
                    <p className='text-primary text-base font-bold'>
                        Payment method
                    </p>

                    <button type='button' className='text-primary text-base font-bold border-0 border-primary' style={{
                            borderBottom: '1px solid'
                        }}
                        data-te-toggle="modal"
                        data-te-target="#leftTopModal"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        + Add new
                    </button>
                </div>

                <div className='flex grow justify-between gap-y-2'>
                   <PaymentMethod /> 
                </div>
                
            </div>
            <Input title='Card holder name' type='text' placeholder='Ex. Jane Cooper' />
            <Input title='Billing address' type='text' placeholder='United States' />
            <div className='flex gap-6'>
                <Input title='Zip code' placeholder='Ex. 73923' type='text' />
                <Input title='City' placeholder='Ex. New York' type='text' />
            </div>
            <div className='flex gap-3 mt-2 items-center'>
                <input type='checkbox' className='accent-primary cursor-pointer' />
                <p className='text-base font-medium' style={{
                    color: '#677489'
                }}>Billing address is same as shipping</p>
            </div>
            
            <input type='submit' value={'Pay'} className='bg-primary h-12 cursor-pointer font-semibold hover:opacity-95 transition-all' style={{
                borderRadius: 12
            }} />
        </form>
      </div>
    </div>
  )
}

export default Invoice
