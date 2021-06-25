import { FC, ReactElement } from 'react'
import Footer from './Footer'
import Header from './Header'
import $ from '../sass/components/Layout.module.sass'

interface ILayout {}

const Layout: FC<ILayout> = ({ children }): ReactElement => {
	return (
		<div className={`${$.Layout}`}>
			<Header />
			<div className={`${$.children}`}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
