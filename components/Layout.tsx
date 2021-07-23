import React, { FC, ReactElement } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface ILayout {}

const Layout: FC<ILayout> = ({ children }): ReactElement => {
	return (
		<div className='container'>
			<Header />
			{children}
			<Footer title='typedashutosh' />
		</div>
	)
}

export default Layout
