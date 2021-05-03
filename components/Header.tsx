import { FC, ReactElement } from 'react'

interface IHeader {}

const Header: FC<IHeader> = (): ReactElement => {
	return (
		<header>
			<span className='logo-text'>typedashutosh</span>
			<nav>
				<a className=' nav nav-1'>home</a>
				<a className=' nav nav-2'>about</a>
				<a className=' nav nav-3'>tools</a>
				<a className=' nav nav-4'>projects</a>
				<a className=' nav nav-5'>contact me</a>
				<a className='theme-switch'></a>
			</nav>
		</header>
	)
}

export default Header
