import React, { FC, ReactElement } from 'react'
import Link from 'next/link'

interface IHeader {}

export const Header: FC<IHeader> = (): ReactElement => {
	return (
		<header className=' text-gray-600 body-font sticky top-0 backdrop-filter backdrop-blur-sm bg-white bg-opacity-75	z-50 '>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
						viewBox='0 0 24 24'
					>
						<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
					</svg>
					<span className='ml-3 text-xl'>typedashutosh</span>
				</a>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					{[
						{ name: 'Home', href: '#home' },
						{ name: 'About', href: '#about' },
						{ name: 'Services', href: '#services' },
						{ name: 'Projects', href: '#project' },
						{ name: 'Reviews', href: '#reviews' },
						{ name: 'GitHub', href: 'https://git.io/Jn061', blank: true }
					].map(link => (
						<Nav {...link} key={link.name} />
					))}
				</nav>
				<Link href='#contact'>
					<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transition-all duration-300'>
						Contact us
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-4 h-4 ml-1'
							viewBox='0 0 24 24'
						>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					</button>
				</Link>
			</div>
		</header>
	)
}

interface INav {
	name: string
	href: string
	blank?: boolean
}

const Nav: FC<INav> = ({ name, href, blank }): ReactElement => {
	return blank ? (
		<a
			target='_blank'
			href={href}
			rel='noopener noreferrer'
			className='mr-2 hover:text-purple-500 border-b-2 border-transparent hover:border-purple-500 cursor-pointer py-1 px-2 shadow-shamrock-lg'
		>
			{name}
		</a>
	) : (
		<Link href={href}>
			<a className='mr-2 hover:text-purple-500 border-b-2 border-transparent hover:border-purple-500 cursor-pointer py-1 px-2 shadow-shamrock-lg'>
				{name}
			</a>
		</Link>
	)
}
