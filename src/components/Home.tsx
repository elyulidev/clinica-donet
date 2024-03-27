"use client";
import Image from "next/image";
import Donet from "../../public/donet/donet1-removebg-preview_upscayl_4x_realesrgan-x4plus.webp";
import TextEffect from "@/components/TextEffect";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export default function Home() {
	return (
		<section className='w-full relative min-h-[calc(100vh-9.125em)] lg:min-h-[calc(100vh-6.251875em)] bg-background  flex justify-center items-center bg-hero-pattern bg-repeat'>
			{/* 6.625em */}
			<div className='lg:max-w-[80%] mx-auto lg:grid lg:grid-cols-4'>
				<motion.div
					variants={fadeIn("up", 0.2)}
					initial='hidden'
					animate='show'
					exit='hidden'
					transition={{ duration: 1, ease: "easeInOut" }}
					className='hidden lg:flex lg:col-span-2'
				>
					<Image
						src={Donet}
						alt=''
						width={370}
						style={{ aspectRatio: "370/493" }}
						className='mask'
						priority={true}
					/>
				</motion.div>
				<motion.div
					variants={fadeIn("down", 0.2)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='lg:col-span-2 flex flex-col justify-center items-center p-4 w-fit'
				>
					<h1 className='text-3xl font-bold text-pretty text center'>
						Bem-vindo à donet<span className='text-primary'>Clínica</span>
					</h1>
					<TextEffect />
				</motion.div>
			</div>
		</section>
	);
}
