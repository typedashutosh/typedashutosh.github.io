import React, { FC, ReactElement } from 'react'
import Skills from '../components/Skills'

interface Iindex {}

const index: FC<Iindex> = (): ReactElement => {
	return (
		<main>
			<Skills />
		</main>
	)
}

export default index
