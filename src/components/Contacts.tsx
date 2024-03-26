import React from "react";
import Image from "next/image";
import Logo from "../../public/logo/logo3.webp";
import { Separator } from "./ui/separator";
import Socials from "./Socials";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { Card } from "./ui/card";
import ContactForm from "./ContactForm";

const Contacts = () => {
	return (
		<section id='contacts' className='w-full bg-secondary p-4'>
			<div className='sm:max-w-[80%] min-h-screen flex flex-col justify-evenly items-center mx-auto'>
				<div className=''>
					<h2 className='text-3xl font-bold lg:text-5xl lg:mb-3'>
						Contate-<span className='text-primary'>nos</span>
					</h2>
				</div>
				<div className='md:grid md:grid-cols-2 md:gap-4'>
					<Card>
						<ContactForm />
					</Card>

					<article className='hidden md:block'>
						<div className='flex justify-center items-center'>
							<Image
								src={Logo}
								alt=''
								priority={true}
								height={80}
								style={{ aspectRatio: "627/470" }}
							/>
							<div>
								donet<span className='text-primary'>Clínica</span>
							</div>
						</div>
						<div className='flex justify-center items-center gap-4 mb-2'>
							<IoLocationOutline size={60} />
							<p className='pretty'>
								Avda. Las Condes 9460, oficina 1004, Las Condes, Santiago,
								Chile.
							</p>
						</div>
						<div className='flex justify-start items-center gap-4'>
							<IoCallOutline size={30} />
							<p className='pretty'>
								<a href='tel:+595972880883'>(+595) 972 880883</a>
							</p>
						</div>

						<Separator className='bg-primary my-4' />
						<div className='flex flex-col justify-center items-center'>
							<div>Social:</div>
							<Socials />
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
