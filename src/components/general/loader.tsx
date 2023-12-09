import React from 'react'
import { CircularProgress } from '@mui/material'

export default function Loader() {
  return (
    <div className='flex flex-col items-center gap-2 flex-1 justify-center'>
        <CircularProgress variant='indeterminate' size={'1.5rem'} sx={{
            color: '#fff'
        }} />
        <p className='text-sm text-light'>Loading</p>
    </div>
  )
}
