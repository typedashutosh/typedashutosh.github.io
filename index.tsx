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
			<Services title={<>Services offered</>} />
			<Project />
			<Pricing />
			<Reviews />
			<Contact_us />
		</main>
	)
}

export default Home
