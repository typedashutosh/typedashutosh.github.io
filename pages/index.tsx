import React, { FC, ReactElement } from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
	return (
		<main>
			<Hero />
			<Skills />
		</main>
	)
}

export default index
