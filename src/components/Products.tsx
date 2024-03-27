"use client";
import { motion } from "framer-motion";
import ProductSlides from "./ProductSlides";

export default function Products() {
	return (
		<section id='products' className='w-full bg-secondary p-4'>
			<div className='sm:max-w-[80%] min-h-screen  flex flex-col justify-evenly items-center mx-auto lg:grid lg:grid-cols-4 '>
				<motion.div
					initial={{ opacity: 0, translateY: -80, display: "none" }}
					animate={{ display: "flex" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='flex flex-col justify-center items-center'
				>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-3'>
						Nossos <span className='text-primary'>produtos</span>
					</h2>
					<p className='text-pretty text-xl font-bold'>
						Oferecemos produtos de qualidade
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateY: 80, display: "none" }}
					animate={{ display: "block" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='col-span-3 ml-4'
				>
					<ProductSlides />
				</motion.div>
			</div>
		</section>
	);
}
