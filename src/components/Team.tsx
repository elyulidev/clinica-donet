import Image from "next/image";
import Donet from "../../public/donet/donet3-removebg.webp";
import Wave from "../../public/wavesOpacity.svg";

export default function Team() {
	return (
		<section
			id='team'
			className='w-full relative min-h-screen bg-background flex justify-center items-center bg-hero-team bg-contain bg-no-repeat bg-center md:bg-none'
		>
			<div className=''>
				<Image
					src={Wave}
					alt=''
					priority={true}
					className='absolute top-0 left-0 w-full overflow-hidden leading-[0px]'
				/>
			</div>
			<div className='max-w-[80%] mx-auto flex flex-col justify-center items-center md:grid md:grid-cols-4'>
				<div className='hidden md:flex md:col-span-2'>
					<Image
						src={Donet}
						alt=''
						width={370}
						style={{ aspectRatio: "370/493" }}
						className='mask'
						priority={true}
					/>
				</div>
				<div className='md:col-span-2 flex flex-col justify-center items-center p-4 w-fit'>
					<h1 className='text-3xl font-bold text-pretty text center mb-4'>
						Dr. Juan Lázaro Donet Montero
					</h1>
					<p className='text-pretty text-primary bg-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur md:bg-transparent md:shadow-none md:backdrop-blur-none'>
						O Dr. Donet dedica mais de 20 anos ao tratamento integral e
						sistêmico dos pacientes, estabelecendo-se em Cuba como um dos
						líderes em seu setor, que integra todo o conhecimento de ponta do
						mundo no atendimento ao paciente.
					</p>
				</div>
			</div>
		</section>
	);
}
