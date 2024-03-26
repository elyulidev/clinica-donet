import Image from "next/image";
import Donet from "../../public/donet/donet1-removebg-preview_upscayl_4x_realesrgan-x4plus.webp";
import TextEffect from "@/components/TextEffect";

export default function Home() {
	return (
		<section className='w-full relative min-h-[calc(100vh-6.625em)] lg:min-h-[calc(100vh-6.251875em)] bg-background  flex justify-center items-center bg-hero-pattern bg-repeat'>
			<div className='lg:max-w-[80%] mx-auto lg:grid lg:grid-cols-4'>
				<div className='hidden lg:flex lg:col-span-2'>
					<Image
						src={Donet}
						alt=''
						width={370}
						style={{ aspectRatio: "370/493" }}
						className='mask'
						priority={true}
					/>
				</div>
				<div className='lg:col-span-2 flex flex-col justify-center items-center p-4 w-fit'>
					<h1 className='text-3xl font-bold text-pretty text center'>
						Bem-vindo à donet<span className='text-primary'>Clínica</span>
					</h1>
					<TextEffect />
				</div>
			</div>
		</section>
	);
}
