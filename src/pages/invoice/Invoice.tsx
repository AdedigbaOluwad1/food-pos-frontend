import bgVector from '@/assets/bg-vector(1).png'
import Logo from '@/assets/Logo.png'
import Image from 'next/image'
import OrderItem from '@/components/order-item'
import Ticket from '@/assets/ticket-discount.png'
import { useRouter } from 'next/router'
import axios from 'axios'

function Invoice() {
    const router = useRouter()
    const { id } = router.query

    const pay = () => {
        axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/invoices/pay', {
            id: id
        })
        .then(e => console.log(e.data))
        .catch(e => console.log(e))
    }
  return (
    <div className="flex w-screen h-screen">
      <div className="w-6/12 flex flex-col h-full bg-primary pl-8 pr-28 py-6" style={{
        backgroundImage: `url(${bgVector})`
      }}>
        <Image alt='logo' src={Logo} />

        <div className='self-end flex flex-col mt-16 w-3/4 gap-6'>
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

      <div className='flex flex-col h-full w-6/12 items-center justify-center'>
        <button onClick={pay} className='w-3/4 bg-primary h-12 font-semibold hover:opacity-95 transition-all' style={{
            borderRadius: 12
        }}>
            Pay
        </button>
      </div>
    </div>
  )
}

export default Invoice
