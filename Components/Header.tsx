import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { FC } from 'react'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'

type THeader = {}

const Header: FC<THeader> = (): JSX.Element => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className=''
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>typedashutosh</Typography>
          <Link href='#'>
            <Button color='inherit' style={{ marginLeft: 'auto' }}>
              Home
            </Button>
          </Link>
          <Link href='#'>
            <Button color='inherit'>About</Button>
          </Link>
          <Link href='#'>
            <Button color='inherit'>Tools</Button>
          </Link>
          <Link href='#'>
            <Button color='inherit'>Projects</Button>
          </Link>
          <Link href='#'>
            <Button color='inherit'>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
