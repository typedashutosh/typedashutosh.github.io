import { FC, ReactElement, useEffect, useState } from 'react'
import { isClient } from '../libs/stateCheck'
import $ from '../sass/components/Hero.module.sass'
interface IMain {}

const Main: FC<IMain> = (): ReactElement => {
	const [LOCC, setLOCC] = useState(0)

	//- Fetch lines of codes
	useEffect(() => {
		if (isClient()) {
			fetch(
				'https://raw.githubusercontent.com/typedashutosh/github-readme-stats/master/generated/overview.svg'
			)
				.then(res => res.text())
				.then(text => {
					let resArr = text.split('>').flatMap(str => str.split('<'))
					setLOCC(parseFloat(resArr[108].replace(',', '')))
				})
		}
	}, [])
	return (
		<section id='hero' className={`${$.hero}`}>
			<div className={`${$.main}`}>
				<div className={`${$.headline}`}>
					Get ServerSide Rendering or Static Site Generation with <b>NextJS</b>, <b>Typescript</b>.
				</div>
				<div className={`${$.btn}`}>
					<a href='#skills' className={`${$.skills_btn} btn`}>
						Skills
					</a>
					<div className={`${$.project_btn} btn`}>Projects</div>
				</div>
			</div>
			<div className={`${$.blob}`}>
				<pre>{`1	const Author: Record<string, unknown> = {`}</pre>
				<pre>{`2		GitHub_Username: 'typedashutosh',`}</pre>
				<pre>{`3		Fullname: 'Ashutosh Kumar',`}</pre>
				<pre>{`4		Year_Of_Birth: 2001,`}</pre>
				<pre>{`5		Lines_Of_Codes_Changed: ${LOCC},`}</pre>
				<pre>{`6		Tools: [`}</pre>
				<pre>{`7			['HTML', 'CSS', 'JavaScript'],`}</pre>
				<pre>{`8			['NextJS', 'Typescript', 'SASS']`}</pre>
				<pre>{`9		]`}</pre>
				<pre>{`10	}`}</pre>
			</div>
		</section>
	)
}

export default Main
