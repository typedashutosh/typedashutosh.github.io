import { FC, ReactElement, ReactNode } from 'react'

interface IAbout {
	title: ReactNode
	subtitle: ReactNode
	stats: { [key: string]: string | undefined } | null
}

export const About: FC<IAbout> = ({ title, subtitle, stats }): ReactElement => {
	// console.log(stats)

	return (
		<section id='about' className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap'>
				<div className='flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
					<div className='w-full sm:p-4 px-4 mb-6'>
						<h1 className='sm:text-3xl text-xl font-medium  mb-2 text-gray-900'>{title}</h1>
						<div className='h-1 w-20 bg-indigo-500 rounded mb-5'></div>
						<div className='leading-relaxed'>{subtitle}</div>
					</div>
					{stats &&
						Object.entries(stats).map(([title, value]) => (
							<StatsCard key={title} title={title} value={value} />
						))}
				</div>
				<div className='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
					<img
						className='object-cover object-center w-full h-full'
						src='https://dummyimage.com/600x300'
						alt='stats'
					/>
				</div>
			</div>
		</section>
	)
}

interface IStatsCard {
	title: string
	value: string | undefined
}
const StatsCard: FC<IStatsCard> = ({ title, value }): ReactElement => {
	console.log(title, value)

	return (
		<>
			<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
				<h2 className='title-font font-medium text-3xl text-gray-900 text-center'>{value}</h2>
				<p className='leading-relaxed text-center'>{title}</p>
			</div>
		</>
	)
}
