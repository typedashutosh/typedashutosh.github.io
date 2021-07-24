import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Contact_us } from '../components/blocks/Contact_us'
import { Project } from '../components/blocks/Project'
import { Hero } from '../components/blocks/Hero'
import { Pricing } from '../components/blocks/Pricing'
import { About } from '../components/blocks/About'
import { Reviews } from '../components/blocks/Reviews'
import { isClient } from '../libs/envCheck'
import { Services } from '../components/blocks/Services'
import { stats } from '../libs/statsFetcher'

interface IHome {}

const Home: FC<IHome> = (): ReactElement => {
	const [statsState, setStatsState] = useState<{ [key: string]: string | undefined } | null>(null)
	useEffect(() => {
		if (isClient()) {
			;(async () => {
				setStatsState(await stats())
			})()
		}
	}, [])

	return (
		<main>
			<Hero
				title={
					<>
						Get <b>Static Site Generation</b> with <b>Typescript</b> Source
					</>
				}
				subtitle={
					<>
						With <b>NextJS</b> and <b>Typescript</b>, I help people accomplish their
						<b> Server Side Rendering</b> or <b>Static Site Generation</b> or
						<b> Incremental Site Regeneration</b> Projects. Contact us to know more...
					</>
				}
				buttonPrimary={{
					text: 'Pricing',
					href: '#pricing'
				}}
				buttonSecondary={{
					text: 'Contact',
					href: '#contact'
				}}
			/>
			<hr  />
			<About
				title='About me'
				subtitle={
					<>
						Hey!, I'm Ashutosh. I'm a Web developer from UP,IN. I started my Web Developer Journey
						in 2020, in due course I learnt many technologies including HTML, CSS, JS, NodeJS,
						ExpressJS, ReactJS etc. Later I got interested in NextJS because of ServerSide Stuff and
						here I'm Working with <b>NextJS</b>, <b>Typescript</b> and <b>TailwindCSS</b>. <br />
						Below are stats about my career:
					</>
				}
				stats={statsState}
			/>
			<hr  />
			<Services
				title={<>Services offered</>}
				services={[
					{
						details: (
							<>
								Get Static Landing page with custom CSS Animations, Carousal, Forms, etc. which is
								responsive to every screen.
							</>
						),
						title: <>Landing Page</>,
						icon: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
								/>
							</svg>
						)
					},
					{
						details: (
							<>
								Got 100s of blogs, don't worry, we'll generate Static Site for each of them with no
								performance issue to client. Everything responsive to all sizes of screens.
							</>
						),
						title: <>Blog Website</>,
						icon: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z'
								/>
							</svg>
						)
					},
					{
						details: (
							<>
								Want to setup your Online store with WhatsApp API? No worries, we'll do that for
								you.{' '}
							</>
						),
						title: <>Online Store</>,
						icon: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
						)
					}
				]}
			/>
			<hr  />
			<Project
				title={<>Projects</>}
				subtitle={
					<>
						To Showcase my skills and give you an idea of what you'll get, I've created several
						projects. Watch these projects to conclude what exactly you want. I've used NextJS,
						TailwindCSS to create these projects. Which is then hosted at Vercel.
					</>
				}
				projects={[
					{
						img:'https://dummyimage.com/720x400',
						title: 'Sample Project',
						subtitle: 'Subtitle',
						desc: `Nothing to show here. We'll update as soon as possible...`
					},{
						img:'https://dummyimage.com/720x400',
						title: 'Sample Project',
						subtitle: 'Subtitle',
						desc: `Nothing to show here. We'll update as soon as possible...`
					},{
						img:'https://dummyimage.com/720x400',
						title: 'Sample Project',
						subtitle: 'Subtitle',
						desc: `Nothing to show here. We'll update as soon as possible...`
					},{
						img:'https://dummyimage.com/720x400',
						title: 'Sample Project',
						subtitle: 'Subtitle',
						desc: `Nothing to show here. We'll update as soon as possible...`
					},
				]}
			/>

			<hr  />
			<Pricing />
			<hr  />
			<Reviews
				title={<>Testimonials</>}
				subtitle={<>What does our customers say about our works</>}
			/>
			<hr  />

			<Contact_us
				title={<>Contact us</>}
				subtitle={<>Contact us for query, quote or to talk about any of your projects.</>}
			/>
		</main>
	)
}

export default Home
