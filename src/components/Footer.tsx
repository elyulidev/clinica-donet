import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className='bg-primary/80 text-gray-300 py-8'>
			<div className='container mx-auto flex flex-wrap justify-between items-center'>
				<div className='w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>donetClínica</h3>
					<p className='text-sm'>
						“Sua saúde, nossa prioridade: fornecer atendimento médico de
						qualidade com compaixão e comprometimento.”
					</p>
				</div>
				<div className='w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>Contato</h3>
					<p className='text-sm'>123 Calle Principal, Ciudad</p>
					<p className='text-sm'>Tel: 123-456-7890</p>
					<p className='text-sm'>Email: donetclinica@gmail.com</p>
				</div>
				<div className='w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>Enlaces</h3>
					<ul>
						<li>
							<a href='#' className='text-sm hover:text-white'>
								Começar
							</a>
						</li>
						<li>
							<a href='#' className='text-sm hover:text-white'>
								Serviços
							</a>
						</li>
						<li>
							<a href='#' className='text-sm hover:text-white'>
								Sobre Nós
							</a>
						</li>
						<li>
							<a href='#' className='text-sm hover:text-white'>
								Contato
							</a>
						</li>
					</ul>
				</div>
				<div className='w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>Siga-nos</h3>
					<div className='flex space-x-4'>
						<a href='#' className='text-sm hover:text-white'>
							<FaFacebookF size={18} />
						</a>
						<a href='#' className='text-sm hover:text-white'>
							<FaInstagram size={18} />
						</a>
						<a href='#' className='text-sm hover:text-white'>
							<FaXTwitter size={18} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
