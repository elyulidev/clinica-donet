"use client";
import { motion } from "framer-motion";
import TestimonialSlides from "./TestimonialSlides";

export default function Testimonials() {
	return (
		<section id='testimonials' className='w-full bg-background p-4'>
			<div className='sm:max-w-[80%] min-h-screen  flex flex-col-reverse justify-evenly items-center mx-auto lg:grid lg:grid-cols-4 '>
				<motion.div
					initial={{ opacity: 0, translateX: -80 }}
					whileInView={{ opacity: 1, translateX: 0, rotateX: 360 }}
					transition={{ duration: 1.5 }}
					viewport={{ once: true }}
					className='col-span-3 '
				>
					<TestimonialSlides />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateY: 80 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='flex flex-col justify-center items-center ml-4'
				>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-3'>
						Nossos <span className='text-primary'> clientes</span>
					</h2>
					<p className='text-pretty text-xl font-bold '>dizem sobre nós</p>
				</motion.div>
			</div>
		</section>
	);
}
