import { FC, ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import $ from '../sass/components/Header.module.sass'
import { isClient } from '../libs/stateCheck'
interface IHeader {}

const Header: FC<IHeader> = (): ReactElement => {
	const [menuOpen, setMenuOpen] = useState(false)
	if (isClient()) {
		onclick = e => {
			;(e.target as Element).classList.contains(`mouse-click-ignore`)
				? null
				: menuOpen
				? setMenuOpen(!menuOpen)
				: null
		}
	} else null
	return (
		<header className={`${$.header}`}>
			<div className={`${$.title}`}>typedashutosh</div>
			<div
				className={`${$.menu_btn} ${menuOpen ? $.menu_open : ''} mouse-click-ignore`}
				onClick={() => {
					setMenuOpen(!menuOpen)
				}}
			>
				<div className={`${$.slice} mouse-click-ignore`}></div>
				<div className={`${$.slice} mouse-click-ignore`}></div>
				<div className={`${$.slice} mouse-click-ignore`}></div>
			</div>
			<nav className={`${$.nav} ${menuOpen ? $.nav_open : ''} mouse-click-ignore`}>
				<Link href='#hero'>
					<div className='mouse-click-ignore'>Home</div>
				</Link>
				<Link href='#'>
					<div className='mouse-click-ignore'>About me</div>
				</Link>
				<Link href='#skills'>
					<div className='mouse-click-ignore'>Skills</div>
				</Link>
				<Link href='#'>
					<div className='mouse-click-ignore'>projects</div>
				</Link>
				<Link href='#'>
					<div className='mouse-click-ignore'>Contact</div>
				</Link>
			</nav>
		</header>
	)
}

export default Header
