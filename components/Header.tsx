import { FC, ReactElement, useState } from 'react'
import Link from 'next/link'
import $ from '../sass/components/Header.module.sass'
interface IHeader {}

const Header: FC<IHeader> = (): ReactElement => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className={`${$.header}`}>
			<div className={`${$.title}`}>typedashutosh</div>
			<div
				className={`${$.menu_btn} ${menuOpen ? $.menu_open : ''}`}
				onClick={() => {
					setMenuOpen(!menuOpen)
				}}
			>
				<div className={`${$.slice}`}></div>
				<div className={`${$.slice}`}></div>
				<div className={`${$.slice}`}></div>
			</div>
			<nav className={`${$.nav} ${menuOpen ? $.nav_open : ''}`}>
				<Link href='#'>Home</Link>
				<Link href='#'>About me</Link>
				<Link href='#'>Skills</Link>
				<Link href='#'>projects</Link>
				<Link href='#'>Contact</Link>
			</nav>
		</header>
	)
}

export default Header
