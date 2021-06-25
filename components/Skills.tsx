import { FC, ReactElement, useEffect, useState } from 'react'
import { isClient } from '../libs/stateCheck'
import $ from '../sass/components/Skills.module.sass'

interface ISkills {}

const Skills: FC<ISkills> = (): ReactElement => {
	const [css, setCss] = useState(true)
	const [glassmorphism, setGlassmorphism] = useState(true)
	const [skeletonCard, setskeletonCard] = useState(true)
	const [grdntBrdr, setGrdntBrdr] = useState(true)
	const [grdntBckgrnd, setGrdntBckgrnd] = useState(true)
	const [loader, setLoader] = useState(true)
	return (
		<section id='skills' className={`${css ? $.Skill_section : ''}`}>
			<div className={`${$.page_title}`}>Skills</div>
			<div className={`${$.Skills} ${glassmorphism ? '' : $.normalise_glassmorphism}`}>
				<div className={`${$.heading}`}>
					<div className={`${$.dot_1}`}></div>
					<div className={`${$.dot_2}`}></div>
					<div className={`${$.dot_3}`}></div>
					<div className={`${$.title}`}>My Skills</div>
				</div>
				<div
					className={`${$.skills_checks} ${grdntBrdr ? '' : $.normalise_grdntBrdr} ${
						grdntBckgrnd ? '' : $.normalise_grdntBckgrnd
					}`}
				>
					<div className={`${$.title}`}>Skills checklist</div>
					<label htmlFor='CSS' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='CSS'
							id='CSS'
							checked={css}
							onChange={e => setCss(e.target.checked)}
						/>
						<div>CSS</div>
					</label>
					<label htmlFor='glassmorphism' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='glassmorphism'
							id='glassmorphism'
							checked={glassmorphism}
							onChange={e => setGlassmorphism(e.target.checked)}
						/>
						<div>Glassmorphism</div>
					</label>
					<label htmlFor='skeleton-card' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='skeleton-card'
							id='skeleton-card'
							checked={skeletonCard}
							onChange={e => setskeletonCard(e.target.checked)}
						/>
						<div>Skeleton loading and Cards</div>
					</label>
					<label htmlFor='gradient-border' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='gradient-border'
							id='gradient-border'
							checked={grdntBrdr}
							onChange={e => setGrdntBrdr(e.target.checked)}
						/>
						<div>Gradient border</div>
					</label>
					<label htmlFor='gradient-background-transition' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='gradient-background-transition'
							id='gradient-background-transition'
							checked={grdntBckgrnd}
							onChange={e => setGrdntBckgrnd(e.target.checked)}
						/>
						<div>Gradient background transition</div>
					</label>
					<label htmlFor='loader' className={`${$.formField}`}>
						<input
							type='checkbox'
							name='loader'
							id='loader'
							checked={loader}
							onChange={e => setLoader(e.target.checked)}
						/>
						<div>Loader</div>
					</label>
				</div>
				<div className={`${$.screen}`}>
					<div className={`${$.card} ${skeletonCard ? '' : $.normalise_skeleton}`}>
						<div className={`${$.avatar_skeleton}`}></div>
						<div className={`${$.title_skeleton}`}></div>
						<div className={`${$.heading_skeleton}`}></div>
						<div className={`${$.paragraph_skeleton}`}></div>
					</div>
					<div className={`${$.card} ${skeletonCard ? '' : $.normalise_skeleton}`}>
						<div className={`${$.avatar_skeleton}`}></div>
						<div className={`${$.title_skeleton}`}></div>
						<div className={`${$.heading_skeleton}`}></div>
						<div className={`${$.paragraph_skeleton}`}></div>
					</div>
					<div className={`${$.loader} ${loader ? '' : $.normalise_loader}`}>
						<div className={`${$.loading_square}`}></div>
						<div className={`${$.loading_square}`}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
