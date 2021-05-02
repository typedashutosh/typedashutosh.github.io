import { FC, ReactElement } from 'react'
import Header from '../components/Header'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
	return (
		<div>
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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt repellat tenetur modi
						saepe, beatae amet ea ratione totam, libero harum iusto perspiciatis veritatis incidunt
						reprehenderit dolores sed nesciunt in molestiae natus sint accusamus corporis ad. Hic a
						nemo aut consequatur neque architecto dolorum. Placeat eos deserunt illum tenetur
						tempora! Ratione.
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
        <div className="sect-1 projects"></div>
        <div className="sect2 designs"></div>
      </section>
			<section className='section-5 contact'>
        {/* form faesojhlakjfjkalklajakjfjkakajfkfljka*/}

      </section>
		</div>
	)
}

export default index
