import Image from "next/image";
import Logo from "../../public/logo/logo3.webp";
import Dr1 from "../../public/about/manos-doctora-irreconocible-escribiendo-forma-escribiendo-teclado-portatil.webp";
import Dr2 from "../../public/about/medico-mujeres-hospital-estetoscopio.webp";
import { GiSupersonicArrow } from "react-icons/gi";
import { RiHandHeartLine } from "react-icons/ri";
import { Button } from "./ui/button";

export default function About() {
	return (
		<section
			id='about'
			className='w-full min-h-screen sm:max-w-[80%] mx-auto bg-background flex flex-col justify-evenly items-center  p-4'
		>
			<div className='flex justify-center items-center'>
				<Image
					src={Logo}
					alt=''
					width={100}
					priority={true}
					style={{ aspectRatio: "4/3" }}
				/>
				<h2 className='text-3xl font-bold lg:text-4xl'>
					donet<span className='text-primary'>Clínica</span>
				</h2>
			</div>
			<div className='lg:grid lg:grid-cols-2 lg:gap-4 '>
				<article className='flex flex-col gap-1'>
					<p className='text-pretty'>
						Compartilhamos a visão integral da pessoa, promovendo a saúde com
						ênfase na prevenção, no diagnóstico precoce e na qualidade de vida.
					</p>
					<div className='flex gap-2'>
						<div className='min-w-4 max-w-8 flex justify-center items-center'>
							<GiSupersonicArrow style={{ width: "100", height: "100" }} />
						</div>
						<div className='flex flex-col gap-1'>
							<h3 className='text-xl font-bold'>Nossa Missão</h3>
							<p className='text-pretty'>
								<span className='font-bold text-primary'>donetClinic </span>
								tem como missão ser um centro de referência em serviços de saúde
								acessíveis e compassivos para melhorar a qualidade de vida
								daqueles que confiam em nós.
							</p>
						</div>
					</div>
					<div className='flex gap-2'>
						<div className='min-w-4 max-w-8 flex justify-center items-center'>
							<RiHandHeartLine style={{ width: "150", height: "150" }} />
						</div>

						<div className='flex flex-col gap-1'>
							<h3 className='text-xl font-bold'>Nossa Visão</h3>
							<p className='text-pretty'>
								Na <span className='font-bold text-primary'>donetClinic</span>{" "}
								nossa visão é sermos líderes em inovação médica e reconhecidos
								como um modelo de excelência em cuidados de saúde, inspirando
								outras clínicas a seguir os nossos padrões de qualidade e
								compaixão em todo o mundo.
							</p>
						</div>
					</div>
				</article>
				<article className='hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4'>
					<div className=''>
						<Image
							src={Dr1}
							alt=''
							priority={true}
							style={{ aspectRatio: "400/267", maxWidth: "250px" }}
						/>
					</div>
					<div className=''>
						<Image
							src={Dr2}
							alt=''
							priority={true}
							style={{ aspectRatio: "500/347", maxWidth: "250px" }}
						/>
					</div>
				</article>
			</div>
			<a
				href=''
				download
				className='flex justify-center items-center col-span-2 mt-1 lg:mt-6'
			>
				<Button>Saber mais</Button>
			</a>
		</section>
	);
}
