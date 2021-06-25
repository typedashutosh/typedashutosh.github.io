import { FC, ReactElement } from 'react'
import $ from '../sass/components/Hero.module.sass'
interface IMain {}

const Main: FC<IMain> = (): ReactElement => {
	return (
		<div id='hero' className={`${$.hero}`}>
			<div className={`${$.main}`}>
				<div className={`${$.headline}`}>
					Get serverside rendering or static site generation with NextJS, Typescript.
				</div>
				<div className={`${$.btn}`}>
					<a href='#skills' className={`${$.skills_btn} btn`}>Skills</a>
					<div className={`${$.project_btn} btn`}>Projects</div>
				</div>
			</div>
			<div className={`${$.blob}`}>
				<pre>{`1	const Author: Record<string, unknown> = {`}</pre>
				<pre>{`2		GitHub_Username: 'typedashutosh',`}</pre>
				<pre>{`3		Fullname: 'Ashutosh Kumar',`}</pre>
				<pre>{`4		Year_Of_Birth: 2001,`}</pre>
				<pre>{`5		Lines_Of_Codes_Changed: 200000,`}</pre>
				<pre>{`6		Tools: [`}</pre>
				<pre>{`7			['HTML', 'CSS', 'JavaScript'],`}</pre>
				<pre>{`8			['NextJS', 'Typescript', 'SASS']`}</pre>
				<pre>{`9		]`}</pre>
				<pre>{`10	}`}</pre>
			</div>
		</div>
	)
}

export default Main
