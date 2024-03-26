import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import ModeToggle from "./ModeToggle";
import { useContext } from "react";
import { NavContext, NavItem } from "./providers/NavContextProvider";

const MobileNav = () => {
	const context = useContext(NavContext);
	return (
		<div className='lg:hidden fixed bottom-0 z-10 w-full'>
			<Tabs defaultValue='home' value={context?.value}>
				<TabsList className='w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none'>
					{context?.nav.map((item: NavItem) => (
						<Link href={item.href} key={item.id}>
							<TabsTrigger value={item.value}>{item.icon}</TabsTrigger>
						</Link>
					))}
					<div className='pl-1 flex justify-center items-center'>
						<ModeToggle />
					</div>
				</TabsList>
			</Tabs>
		</div>
	);
};

export default MobileNav;
