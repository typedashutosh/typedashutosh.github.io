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
		<div className={`${$.root}`}>
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
			</header>
			<nav className={`${$.nav} ${menuOpen ? $.nav_open : ''} mouse-click-ignore`}>
				<Link href='#hero'>
					<div>Home</div>
				</Link>
				<Link href='#'>
					<div>About me</div>
				</Link>
				<Link href='#skills'>
					<div>Skills</div>
				</Link>
				<Link href='#'>
					<div>projects</div>
				</Link>
				<Link href='#'>
					<div>Contact</div>
				</Link>
			</nav>
		</div>
	)
}

export default Header
