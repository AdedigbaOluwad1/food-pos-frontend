import React from 'react'
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

export default function Dashboard() {
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

                    <td width={'30%'}>
                      Reference No
                    </td>

                    <td width={'40%'}>
                      Customer
                    </td>

                    <td width={'10%'}>
                      Status
                    </td>

                    <td width={'10%'}>
                      
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {
                    dummyInvoice.map((e, index) => {
                      return (
                        <tr key={e.refNo} className='t-body-row'>
                          <td width={'10%'}>
                            {index + 1}
                          </td>

                          <td width={'30%'}>
                            {e.refNo}
                          </td>

                          <td width={'40%'}>
                            {e.userName}
                          </td>

                          <td width={'10%'}>
                            <span className='bg-success px-3' style={{
                              borderRadius: 8,
                              fontStyle: 'italic'
                            }}>
                              {e.status}
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
              Invoices
            </h4>
            <div className='bg-primary p-5' style={{ borderRadius: 12 }}>
              <table>
                <thead>
                  <tr className='t-head-row'>
                    <td width={'10%'}>
                      S/N
                    </td>

                    <td width={'30%'}>
                      Reference No
                    </td>

                    <td width={'40%'}>
                      Customer
                    </td>

                    <td width={'10%'}>
                      Status
                    </td>

                    <td width={'10%'}>
                      
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {
                    dummyInvoice.map((e, index) => {
                      return (
                        <tr key={e.refNo} className='t-body-row'>
                          <td width={'10%'}>
                            {index + 1}
                          </td>

                          <td width={'30%'}>
                            {e.refNo}
                          </td>

                          <td width={'40%'}>
                            {e.userName}
                          </td>

                          <td width={'10%'}>
                            <span className='bg-success px-3' style={{
                              borderRadius: 8,
                              fontStyle: 'italic'
                            }}>
                              {e.status}
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
        </div>
      </div>
    </DashboardLayout>
  )
}

// export async function getServerSideProps(){
//   const res = await axios.post('')
//   const data = await res.data

//   return { props: { data }}
// }