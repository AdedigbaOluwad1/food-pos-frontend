import React from 'react'
import { CircularProgress } from '@mui/material'
export default function Loader() {
  return (
    <CircularProgress variant='indeterminate' size={'1.5rem'} sx={{
        color: '#fff'
      }} />
  )
}
