import { FC, ReactElement, useEffect } from 'react'
import Image from 'next/image'

interface ITool_card {
	classname:string
	img_url: string
	title: string
	desc: string
}

const Tool_card: FC<ITool_card> = ({ classname, img_url, title, desc }): ReactElement => {
	return (
		<div id='card'>
			<div className={`img ${classname}`}>
				<Image className='logo' src={img_url} height={128} width={128} />
			</div>
			<span className={`card-title ${title}`}>{title}</span>
			<div className='desc'>{desc}</div>
		</div>
	)
}

export default Tool_card
