"use client";

import React, { createContext, useEffect, useState } from "react";
import { FaHome, FaInfo } from "react-icons/fa";
import {
	MdContactMail,
	MdMedicalServices,
	MdPeople,
	MdProductionQuantityLimits,
} from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { useUrlHash } from "../hooks/useUrlHash";
import { useRouter } from "next/navigation";

export type NavItem = {
	id: number;
	name: string;
	value: string;
	href: string;
	icon: JSX.Element;
	current: boolean;
};

//object with navigation
const navigation: NavItem[] = [
	{
		id: 1,
		name: "Home",
		value: "home",
		href: "#home",
		icon: <FaHome />,
		current: true,
	},
	{
		id: 2,
		name: "Sobre Nós",
		value: "about",
		href: "#about",
		icon: <FaInfo />,
		current: false,
	},
	{
		id: 3,
		name: "Serviços",
		value: "services",
		href: "#services",
		icon: <MdMedicalServices />,
		current: false,
	},
	{
		id: 4,
		name: "Equipo",
		value: "team",
		href: "#team",
		icon: <RiTeamFill />,
		current: false,
	},
	{
		id: 5,
		name: "Produtos",
		value: "products",
		href: "#products",
		icon: <MdProductionQuantityLimits />,
		current: false,
	},
	{
		id: 6,
		name: "Testemunhos",
		value: "testimonials",
		href: "#testimonials",
		icon: <MdPeople />,
		current: false,
	},
	{
		id: 7,
		name: "Contato",
		value: "#contacts",
		href: "#contacts",
		icon: <MdContactMail />,
		current: false,
	},
];

export type NavContextType = {
	nav: NavItem[];
	setNav: React.Dispatch<React.SetStateAction<NavItem[]>>;
	value: string;
};

export const NavContext = createContext<NavContextType | null>(null);

const NavContextProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [nav, setNav] = useState<NavItem[]>(navigation);
	const path = useUrlHash();
	const [value, setValue] = useState("");
	const router = useRouter();

	useEffect(() => {
		let newPath = path === "" ? "#home" : path;

		setValue((prev: string) => {
			const current = navigation.find((item) => item.href === newPath);
			if (current?.href) {
				router.push(current.href, { scroll: true });
			}
			return current?.value || "home";
		});
	}, [path, router]);

	return (
		<NavContext.Provider value={{ nav, setNav, value }}>
			{children}
		</NavContext.Provider>
	);
};

export default NavContextProvider;
