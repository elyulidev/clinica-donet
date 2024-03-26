"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const ModeToggle = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean | null>();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return;

	const toogleMode = () => {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
	};

	return (
		<Switch
			className='bg-primary '
			checked={resolvedTheme === "dark" ? true : false}
			onCheckedChange={toogleMode}
		/>
	);
};

export default ModeToggle;
