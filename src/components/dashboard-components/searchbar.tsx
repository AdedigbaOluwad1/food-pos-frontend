import React from 'react'
import Input from '@/components/general/input'
import { IconButton } from '@mui/material'
import Image from 'next/image'
import searchIcon from '@/assets/icons/search-icon.svg'

export default function SearchBar() {
  return (
    <Input 
        placeholder='Search for food, coffee etc..'
        sx={{
            width: '18rem'
        }}
        InputProps={{
            startAdornment: (
            <IconButton
                disableRipple
                sx={{
                p: 0
                }}
            >
                <Image 
                src={searchIcon} 
                alt='search'
                style={{
                    width: '1.25rem',
                    height: '1.25rem'
                }}
                />
            </IconButton>
            )
        }}
    />
  )
}
