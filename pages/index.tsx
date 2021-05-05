import { FC, ReactElement, useEffect } from 'react'
import Header from '../components/Header'
import Tool_card from '../components/Tool_card'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
	useEffect(() => {
		const bubble_fn = () => {
			const bubbles = document.querySelectorAll(
				`.section-2 .background .bubble`
			) as NodeListOf<HTMLDivElement>

			bubbles.forEach(bubble => {
				const random_dimension = Math.random() * 10 + 6

				bubble.style.height = `${random_dimension}vw`
				bubble.style.width = `${random_dimension}vw`
				bubble.style.opacity = `${Math.random() / 2 + 0.25}`
				bubble.style.top = `${Math.random() * 100}%`
				bubble.style.left = `${Math.random() * 100}%`
			})
		}
		bubble_fn()
	}, [])
	return (
		<main>
			<section className='section-1 home'>
				<div className='background'>
					<div className='main'>
						<div
							style={{
								background: `url('/assets/blob-left.svg')`,
								backgroundOrigin: 'bottom left',
								backgroundSize: 'cover',
							}}
							className='svg-main left'
						></div>
						<div
							style={{
								background: `url('/assets/blob-right.svg')`,
								backgroundOrigin: ' top right',
								backgroundSize: 'cover',
							}}
							className='svg-main right'
						></div>
					</div>
				</div>
				<div className='sect-1'>
					<div className='title'>
						<span className='top'>Hello, I'm</span>
						<span className='mid'>Ashutosh kumar</span>
						<span className='bottom'>A Frontend Web-Developer</span>
					</div>
					<div className='links'>
						<a href='https://github.com/typedashutosh' target='_blank' className='link-1'>
							GitHub
						</a>
						<a href='#' className='link-2'>
							Resume
						</a>
					</div>
				</div>

				<div className='stats'>
					<img
						src='https://github-readme-stats.vercel.app/api?username=typedashutosh&bg_color=00000000&hide_border=true&text_color=f3f3f3&title_color=0066ff'
						alt='overview'
					/>
				</div>
			</section>
			<section className='section-2 about'>
				<div className='background'>
					<div className='bubble'></div>
					<div className='bubble'></div>
					<div className='bubble'></div>
					<div className='bubble'></div>
					<div className='bubble'></div>
					<div className='bubble'></div>
					<div className='bubble'></div>
					<div className='skewed-path'></div>
				</div>
				<span className='title'>about</span>
				<div className='sect-1'>
					<span className='image'></span>
					<span className='text'>
						Hi, I'm Ashutosh kumar, a self-taught web-developer from UP, IN. I use of modern web
						technologies to build websites that looks great, feel responsive, work fast and are
						secure. <br />I use Nextjs to generate static sites and serverside rendered pages, which
						are lightning fast and SEO friendly, Material-UI to make standard UI, which every one
						loves.
					</span>
				</div>
			</section>
			<section className='section-3 tools'>
				<div className='background'>
					{/* background similer to anurag hazra's background where many tech names were displayed */}
				</div>
				<span className='title'>tools</span>
				<div className='sect-1'>
					<Tool_card
						classname='njs'
						img_url='/assets/icons/nextjs.svg'
						title='NEXT.JS'
						desc={`It's a wonderful technology made on top of React.js which can be use to produce SPA, SSG and SSR.`}
					/>
					<Tool_card
						classname='ts'
						img_url='/assets/icons/typescript.svg'
						title='Typescript'
						desc={`Typescript is a strict syntactical superset of JavaScript and adds optional static typing to the language. `}
					/>
					<Tool_card
						classname='mui'
						img_url='/assets/icons/material-ui.svg'
						title='Material-UI'
						desc={`Material-UI provides React components for faster and easier web development. `}
					/>
				</div>
			</section>
			<section className='section-4 projects'>
				<div className='background'>

				</div>
				<div className='sect-1 projects'>
					
				</div>
				<div className='sect2 designs'></div>
			</section>
			<section className='section-5 contact'></section>
		</main>
	)
}

export default index
