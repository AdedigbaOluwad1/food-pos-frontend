import React, {useEffect} from 'react'
import axios from 'axios'
import DashboardLayout from '@/layouts/dashboard-layout'
import DashboardCards from '@/components/dashboard-cards'
import personalCard from '@/assets/personalcard.svg' 
import receipt from '@/assets/receipt-edit.svg'
import ticket from '@/assets/archive-tick.svg'
import dollar from '@/assets/dollar-square.svg'
import product from '@/assets/tag.svg'
import totalInvoices from '@/assets/bitcoin-card.svg'
import { dummyUsers, dummyInvoice } from '@/data/data-store'
import useGetInvoice from '@/hooks/useGetInvoices'
import { useSelector, useDispatch } from 'react-redux'
import { updateProducts, updateInvoices } from '@/store/general-app-state'
import useGetProducts from '@/hooks/useGetProducts'
import { IGetInvoicesRes, IInvoiceObject, IProductObject, state } from '@/data/data'

// export async function getServerSideProps(){
//   try {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/products') 
//     const data = await res.json()
//     return { 
//       props: { 
//         data
//       }
//     }
//   } catch (e) {
//     return {
//       props: {
//         e
//       }
//     }
//   }
// }

export default function Dashboard() {
  const dispatch = useDispatch()
  const productApiRes = useGetProducts()
  const invoiceApiRes = useGetInvoice( '', '', '')
  const state = useSelector((e: state) => e)
  
  // dispatch the response of the updateProductState hook to redux
  const updateProductsState = (e: IProductObject[]) => {
    dispatch(updateProducts(e))
  }
   // dispatch the response of the updateInvoice hook to redux
  const updateInvoiceState = (e: IInvoiceObject[]) => {
    dispatch(updateInvoices(e))
  }

  // get the response of the api call from the hook, performing in useEffect to minimize no of renders
  useEffect(() => {
    productApiRes.then((e: { data: IProductObject[]}) => {
      updateProductsState(e.data)
    })

    invoiceApiRes.then((e: IInvoiceObject[]) => {
      updateInvoiceState(e)
    })
  }, [])

  return (
    <DashboardLayout>
      <div className='w-full gap-6 flex flex-col'>
        <div className='flex flex-wrap w-full justify-between items-center gap-6'>
          <DashboardCards 
            value={20} 
            title='Total Customers' 
            icon={personalCard} 
            bg='#b287f7' 
          /> 
          
          <DashboardCards 
            value={10} 
            title='Pending Bills' 
            icon={receipt} 
            bg='#ff7976' 
          />

          <DashboardCards 
            value={13} 
            title='Total Invoices' 
            icon={totalInvoices} 
            bg='#57caeb' 
          />

          <DashboardCards 
            value={600000} 
            title='Due Amount' 
            icon={dollar} 
            bg='#5ddab4' 
          />
          
          <DashboardCards 
            value={13} 
            title='Paid Bills' 
            icon={ticket} 
            bg='#008001' 
          />

          <DashboardCards 
            value={6} 
            title='Total Products' 
            icon={product} 
            bg='#3c0084' 
          />
        </div>

        <div className='flex flex-wrap gap-6'>
          <div className='flex flex-col gap-3' style={{ flex: '1 0 300px', }}>
            <h4 className='text-lg font-bold'>
              Customers
            </h4>
            <div className='bg-primary p-5' style={{ borderRadius: 12 }}>
              <table>
                <thead>
                  <tr className='t-head-row'>
                    <td width={'10%'}>
                      S/N
                    </td>

                    <td width={'40%'}>
                      Name
                    </td>

                    <td width={'40%'}>
                      Email
                    </td>

                    <td width={'10%'}>
                      
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {
                    dummyUsers.map((e, index) => {
                      return (
                        <tr key={e.email} className='t-body-row'>
                          <td width={'10%'}>
                            {index + 1}
                          </td>

                          <td width={'40%'}>
                            {e.userName}
                          </td>

                          <td width={'40%'}>
                            {e.email}
                          </td>

                          <td width={'10%'} align='center'>
                            <i className="bi bi-three-dots-vertical"></i>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className='flex flex-col gap-3' style={{ flex: '1 0 300px', }}>
            <h4 className='text-lg font-bold'>
              Invoices
            </h4>
            <div className='bg-primary p-5' style={{ borderRadius: 12 }}>
              <table>
                <thead>
                  <tr className='t-head-row'>
                    <td width={'10%'}>
                      S/N
                    </td>

                    <td width={'26.6%'}>
                      Reference No
                    </td>

                    <td width={'26.6%'}>
                      Customer
                    </td>

                    <td width={'26.6%'}>
                      Status
                    </td>

                    <td width={'10%'}>
                      
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {
                    state.generalState.invoices.map((e, index) => {
                      return (
                        <tr key={e._id.$oid} className='t-body-row'>
                          <td width={'10%'}>
                            {index + 1}
                          </td>

                          <td width={'26.6%'}>
                            {'20220122-001'}
                          </td>

                          <td width={'26.6%'}>
                            {'A user'}
                          </td>

                          <td width={'26.6%'}>
                            <span className='px-3 font-medium' style={{
                              borderRadius: 12,
                              fontStyle: 'italic',
                              background: e.paid ? '#3abf38' : '#FFA500',
                              paddingTop: '0.1rem',
                              paddingBottom: '0.1rem'
                            }}>
                              {e.paid ? 'Paid' : 'Pending'}
                            </span>
                          </td>

                          <td width={'10%'} align='center'>
                            <i className="bi bi-three-dots-vertical"></i>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className='flex flex-col gap-3' style={{ flex: '1 0 100%', }}>
            <h4 className='text-lg font-bold'>
              Products
            </h4>
            <div className='bg-primary p-5' style={{ borderRadius: 12 }}>
              <table>
                <thead>
                  <tr className='t-head-row'>
                    <td width={'10%'}>
                      S/N
                    </td>

                    <td width={'20%'}>
                      Name
                    </td>

                    <td width={'20%'}>
                      Description
                    </td>

                    <td width={'20%'}>
                      Date Created
                    </td>

                    <td width={'20%'}>
                      Price
                    </td>

                    <td width={'10%'}>
                      
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {
                    state.generalState.products.map((e, index) => {
                      return (
                        <tr key={e._id.$oid} className='t-body-row'>
                          <td width={'10%'}>
                            {index + 1}
                          </td>

                          <td width={'20%'}>
                            {e.itemName}
                          </td>

                          <td width={'20%'}>
                            {e.description}
                          </td>

                          <td width={'20%'}>
                            {
                              new Date(e.created_at.$date).toLocaleDateString('en-us', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              })
                            }
                          </td>

                          <td width={'20%'}>
                            ${e.price.toLocaleString()}
                          </td>

                          <td width={'10%'} align='center'>
                            <i className="bi bi-three-dots-vertical"></i>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}