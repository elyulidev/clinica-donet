"use client";
import Image from "next/image";
import Logo from "../../public/logo/logo3.webp";
import Nav from "./Nav";
import Socials from "./Socials";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { Suspense } from "react";
import NavContextProvider from "./providers/NavContextProvider";

const Header = () => {
	return (
		<header id='home'>
			<section className='flex flex-col bg-secondary text-foreground'>
				<div className='grid grid-cols-3 lg:w-[80%] lg:mx-auto'>
					<div className='lg:w-[80px]'>
						<Image
							src={Logo}
							alt=''
							className='w-[120px] '
							style={{ aspectRatio: "577/433" }}
							priority={true}
						/>
					</div>
					<div className='col-span-2 pt-2 lg:p-0 lg:flex lg:flex-row lg:justify-between'>
						<div className='lg:w-[50%] lg:flex lg:flex-row lg:justify-between'>
							<div className='flex justify-left items-center text-primary'>
								<IoCallOutline size={18} className='mr-2 ' />
								<a href='tel:+595972880883'>+595 972 880883</a>
							</div>
							<div className='flex justify-left items-center text-primary'>
								<IoLocationOutline size={18} className='mr-2' />
								<span>Paraguay</span>
							</div>
						</div>
						<div className='flex justify-left items-center py-4'>
							<Socials />
						</div>
					</div>
				</div>
			</section>
			<section>
				<Suspense>
					<NavContextProvider>
						<Nav />
					</NavContextProvider>
				</Suspense>
			</section>
		</header>
	);
};

export default Header;
