import { FC, ReactElement } from 'react'

interface ITestimonial {}

export const Reviews: FC<ITestimonial> = (): ReactElement => {
	return (
		<section id='reviews' className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-20'>
					<h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
						Testimonials
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
					</p>
				</div>
				<div className='flex flex-wrap -m-4'>
					<ReviewsCard />
					<ReviewsCard />
					<ReviewsCard />
				</div>
			</div>
		</section>
	)
}

interface ITestimonial {}

export const ReviewsCard: FC<ITestimonial> = (): ReactElement => {
	return (
		<div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
			<div className='h-full text-center'>
				<img
					alt='testimonial'
					className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
					src='https://dummyimage.com/305x305'
				/>
				<p className='leading-relaxed'>
					Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut
					+1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
					cronut adaptogen squid fanny pack vaporware.
				</p>
				<span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
				<h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
					HENRY LETHAM
				</h2>
				<p className='text-gray-500'>CTO</p>
			</div>
		</div>
	)
}
