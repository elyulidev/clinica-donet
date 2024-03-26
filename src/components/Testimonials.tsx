import TestimonialSlides from "./TestimonialSlides";

export default function Testimonials() {
	return (
		<section id='testimonials' className='w-full bg-background p-4'>
			<div className='sm:max-w-[80%] min-h-screen  flex flex-col-reverse justify-evenly items-center mx-auto lg:grid lg:grid-cols-4 '>
				<div className='col-span-3 '>
					<TestimonialSlides />
				</div>
				<div className='flex flex-col justify-center items-center ml-4'>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-3'>
						Nossos <span className='text-primary'> clientes</span>
					</h2>
					<p className='text-pretty text-xl font-bold '>dizem sobre nós</p>
				</div>
			</div>
		</section>
	);
}
