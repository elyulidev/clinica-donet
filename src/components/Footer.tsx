import Image from "next/image";
import Logo from "../../public/logo/logo3.webp";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className='bg-primary/80 text-gray-300 py-8'>
			<div className='container mx-auto mb-4 grid gap-2 md:grid-cols-2 lg:grid-cols-4 '>
				<div className='w-full'>
					<div className='flex justify-start items-center'>
						<Image src={Logo} alt='' width={60} />
						<h3 className='text-lg font-bold mb-2'>donetClínica</h3>
					</div>

					<p className='text-sm text-pretty'>
						“Sua saúde, nossa prioridade: fornecer atendimento médico de
						qualidade com compaixão e comprometimento.”
					</p>
				</div>
				<div className='w-full'>
					<h3 className='text-lg font-bold mb-2'>Contato</h3>
					<p className='text-sm'>123 Calle Principal, Ciudad</p>

					<p className='text-sm'>Tel: 123-456-7890</p>
					<p className='text-sm'>Email: donetclinica@gmail.com</p>
				</div>
				<div className='w-full '>
					<h3 className='text-lg font-bold mb-2'>Enlaces</h3>
					<ul>
						<li>
							<a href='#home' className='text-sm hover:text-white'>
								Começar
							</a>
						</li>
						<li>
							<a href='#about' className='text-sm hover:text-white'>
								Sobre Nós
							</a>
						</li>
						<li>
							<a href='#services' className='text-sm hover:text-white'>
								Serviços
							</a>
						</li>
						<li>
							<a href='#team' className='text-sm hover:text-white'>
								Equipo
							</a>
						</li>
						<li>
							<a href='#products' className='text-sm hover:text-white'>
								Produtos
							</a>
						</li>
						<li>
							<a href='#testimonials' className='text-sm hover:text-white'>
								Testemunhos
							</a>
						</li>
						<li>
							<a href='#contact' className='text-sm hover:text-white'>
								Contato
							</a>
						</li>
					</ul>
				</div>
				<div className='w-full'>
					<h3 className='text-lg font-bold mb-2'>Siga-nos</h3>
					<div className='flex space-x-4'>
						<a
							href='https://facebook.com'
							className='text-sm hover:text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaFacebookF size={18} />
						</a>
						<a
							href='https://instagram.com'
							className='text-sm hover:text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram size={18} />
						</a>
						<a
							href='https://twitter.com'
							className='text-sm hover:text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaXTwitter size={18} />
						</a>
					</div>
					<p className='text-sm mt-4'>
						<a
							href='https://www.google.com/maps/dir/?api=1&destination=-34.603734,-58.377218&travelmode=driving&z=12&fov=90'
							target='_blank'
							rel='noopener noreferrer'
						>
							Encontre-nos no Google Maps
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
