import { FC, ReactElement } from 'react'

interface IProject_card {}

const Project_card: FC<IProject_card> = (): ReactElement => {
	return (
		<div id='project-card'>
			<div className='pane-left'>{/* screenshot of the website */}</div>
			<div className='pane-right'>{/* technologies used, Preview link and repository link */}</div>
		</div>
	)
}

export default Project_card
