import ProductSlides from "./ProductSlides";

export default function Products() {
	return (
		<section id='products' className='w-full bg-secondary p-4'>
			<div className='sm:max-w-[80%] min-h-screen  flex flex-col justify-evenly items-center mx-auto lg:grid lg:grid-cols-4 '>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-3'>
						Nossos <span className='text-primary'>produtos</span>
					</h2>
					<p className='text-pretty text-xl font-bold'>
						Oferecemos produtos de qualidade
					</p>
				</div>
				<div className='col-span-3 ml-4'>
					<ProductSlides />
				</div>
			</div>
		</section>
	);
}
