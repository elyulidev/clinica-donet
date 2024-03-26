"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import ModeToggle from "./ModeToggle";
import { NavContext, NavItem } from "./providers/NavContextProvider";
import { useContext } from "react";

const PcNav = () => {
	const context = useContext(NavContext);

	return (
		<div className='hidden lg:flex w-full shadow-md'>
			<Tabs defaultValue='home' className='w-full ' value={context?.value}>
				<TabsList className='w-full rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md bg-white/95 backdrop-blur'>
					{context?.nav.map((item: NavItem) => {
						return (
							<Link href={item.href} key={item.id}>
								<TabsTrigger value={item.value}>{item.name}</TabsTrigger>
							</Link>
						);
					})}
					<div className='pl-1 flex justify-center items-center'>
						<ModeToggle />
					</div>
				</TabsList>
			</Tabs>
		</div>
	);
};

export default PcNav;
