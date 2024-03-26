"use client";
import { motion } from "framer-motion";
import ServiceSlides from "./ServiceSlides";

export default function Services() {
	return (
		<section id='services' className='w-full bg-secondary p-4'>
			<div className='sm:max-w-[80%] min-h-screen  flex flex-col justify-evenly items-center mx-auto lg:grid lg:grid-cols-4 '>
				<motion.div
					initial={{ opacity: 0, translateX: -80 }}
					whileInView={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='flex flex-col justify-center items-center'
				>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-4'>
						Nossos <span className='text-primary'>serviços</span>
					</h2>
					<p className='text-pretty text-xl font-bold'>
						Oferecemos serviços de qualidade
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateX: 80 }}
					whileInView={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='col-span-3 ml-4'
				>
					<ServiceSlides />
				</motion.div>
			</div>
		</section>
	);
}
