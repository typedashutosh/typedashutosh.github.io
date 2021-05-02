import { FC, ReactElement } from 'react'
import Footer from './Footer'
import Header from './Header'

interface ILayout {}

const Layout: FC<ILayout> = ({ children }): ReactElement => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
