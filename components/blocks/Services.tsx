import Link from 'next/link'
import { FC, ReactElement, ReactNode } from 'react'

interface IServices {
	title: ReactNode
	subtitle?: ReactNode
	services: Array<IServiceCard>
	button?: {
		title: string
		link: string
	}
}

export const Services: FC<IServices> = ({ title, subtitle, services, button }): ReactElement => {
	return (
		<section id='services' className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='text-center mb-20'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
						{title}
					</h1>
					<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
						{subtitle}
					</p>
					<div className='flex mt-6 justify-center'>
						<div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
					</div>
				</div>
				<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
					{services && services.map((service, index) => <ServiceCard key={index} {...service} />)}
				</div>
				{button && (
					<Link href={button.link	}>
						<button className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
							{button.title}
						</button>
					</Link>
				)}
			</div>
		</section>
	)
}

interface IServiceCard {
	title: ReactNode
	details: ReactNode
	icon: ReactNode
	link?: {
		href: string
		linkText: string
	}
}

const ServiceCard: FC<IServiceCard> = ({ title, details, icon, link }): ReactElement => {
	const href = link?.href
	const linkText = link?.linkText

	return (
		<div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
			<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
				{icon}
			</div>
			<div className='flex-grow'>
				<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>{title}</h2>
				<p className='leading-relaxed text-base'>{details}</p>
				{href && (
					<Link href={href}>
						<a className='mt-3 text-indigo-500 inline-flex items-center'>
							{linkText}
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 ml-2'
								viewBox='0 0 24 24'
							>
								<path d='M5 12h14M12 5l7 7-7 7'></path>
							</svg>
						</a>
					</Link>
				)}
			</div>
		</div>
	)
}
