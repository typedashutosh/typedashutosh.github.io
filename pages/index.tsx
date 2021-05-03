import { FC, ReactElement } from 'react'
import Header from '../components/Header'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
	return (
		<main>
			<section className='section-1 home'>
				<div className='background'>
					<div className='main'>
						<div className='svg-main left'></div>
						<div className='svg-main right'></div>
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
					<div className='bubbles'></div>
					<div className='bubbles'></div>
					<div className='bubbles'></div>
					<div className='bubbles'></div>
					<div className='bubbles'></div>
					<div className='bubbles'></div>
					<div className='bubbles'></div>
					<div className='skewed-path'></div>
				</div>
				<span className='title'>about</span>
				<div className='sect-1'>
					<span className='image'></span>
					<span className='text'>
						Hi, I'm Ashutosh kumar, a self-taught web-developer from UP, IN. I use of modern web
						technologies to build websites that looks great, feel responsive, work fast and are
						secure. <br />I use Nextjs to generate static sites and serverside rendered pages, which
						are lightning fast and SEO friendly, Material-UI to make Google standard UI, which every
						one loves.
					</span>
				</div>
			</section>
			<section className='section-3 tools'>
				<span className='title'>tools</span>
				<div className='sect-1'>
					<div>HTML</div>
					<div>CSS</div>
					<div>SASS</div>
					<div>JS</div>
					<div>TS</div>
					<div>NEXTJS</div>
					<div>MATERIALUI</div>
					<div>TAILWIND</div>
					<div>FIGMA</div>
				</div>
			</section>
			<section className='section-4 projects'>
				<div className='sect-1 projects'></div>
				<div className='sect2 designs'></div>
			</section>
			<section className='section-5 contact'>
				{/* form faesojhlakjfjkalklajakjfjkakajfkfljka*/}
			</section>
		</main>
	)
}

export default index
