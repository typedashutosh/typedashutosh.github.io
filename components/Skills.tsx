import { FC, ReactElement, useState } from 'react'
import $ from '../sass/components/Skills.module.sass'

interface ISkills {}

const Skills: FC<ISkills> = (): ReactElement => {
	const [css, setCss] = useState([false, false])
	const [glassmorphism, setGlassmorphism] = useState([false, false])
	const [skeleton, setskeleton] = useState([false, false])
	const [grdntBrdr, setGrdntBrdr] = useState([false, false])
	const [grdentBckgrnd, setGrdentBckgrnd] = useState([false, false])
	const [loader, setLoader] = useState([false, false])

	return (
		<section className={`${$.Skill_section}`}>
			<div className={`${$.Skills}`}>
				<div className={`${$.heading}`}>
					<div className={`${$.dot_1}`}></div>
					<div className={`${$.dot_2}`}></div>
					<div className={`${$.dot_3}`}></div>
					<div className={`${$.title}`}>My Skills</div>
				</div>
				<div className={`${$.skills_checks}`}>
					<div className={`${$.title}`}>Skills checklist</div>
					<label htmlFor='CSS' className={`${$.formField}`}>
						<input type='checkbox' name='CSS' id='CSS' />
						<div>CSS</div>
					</label>
					<label htmlFor='glassmorphism' className={`${$.formField}`}>
						<input type='checkbox' name='glassmorphism' id='glassmorphism' />
						<div>Glassmorphism</div>
					</label>
					<label htmlFor='skeleton' className={`${$.formField}`}>
						<input type='checkbox' name='skeleton' id='skeleton' />
						<div>Skeleton loading</div>
					</label>
					<label htmlFor='gradient-border' className={`${$.formField}`}>
						<input type='checkbox' name='gradient-border' id='gradient-border' />
						<div>Gradient border</div>
					</label>
					<label htmlFor='gradient-background-transition' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='gradient-background-transition'
							id='gradient-background-transition'
						/>
						<div>Gradient background transition</div>
					</label>
					<label htmlFor='loader' className={`${$.formField}`}>
						<input type='checkbox' name='loader' id='loader' />
						<div>Loader</div>
					</label>
				</div>
				<div className={`${$.screen}`}>
					<div className={`${$.card}`}>
						<div className={`${$.avatar_skeleton}`}></div>
						<div className={`${$.title_skeleton}`}></div>
						<div className={`${$.heading_skeleton}`}></div>
						<div className={`${$.paragraph_skeleton}`}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
