import ServiceSlides from "./ServiceSlides";

export default function Services() {
	return (
		<section id='services' className='w-full bg-secondary p-4'>
			<div className='sm:max-w-[80%] min-h-screen  flex flex-col justify-evenly items-center mx-auto lg:grid lg:grid-cols-4 '>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-4'>
						Nossos <span className='text-primary'>serviços</span>
					</h2>
					<p className='text-pretty text-xl font-bold'>
						Oferecemos serviços de qualidade
					</p>
				</div>
				<div className='col-span-3 ml-4'>
					<ServiceSlides />
				</div>
			</div>
		</section>
	);
}
