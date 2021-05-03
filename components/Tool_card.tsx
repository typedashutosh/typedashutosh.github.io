import { FC, ReactElement } from 'react'
import Image from 'next/image'
import $ from  '../styles/Tool_card.module.sass'

interface ITool_card {
	img_url: string
	title: string
	desc: string
}

const Tool_card: FC<ITool_card> = ({ img_url, title, desc }): ReactElement => {
	return (
		<div className={$.card}>
			<Image src={img_url} height={128} width={128} />
			<span className={`card-title ${title}`}>{title}</span>
			<div className='desc'>{desc}</div>
		</div>
	)
}

export default Tool_card
