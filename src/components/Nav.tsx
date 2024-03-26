"use client";

import { Suspense } from "react";
import PcNav from "./PcNav";
import MobileNav from "./MobileNav";

const Nav = () => {
	return (
		<nav>
			<Suspense>
				<PcNav />
			</Suspense>
			<Suspense>
				<MobileNav />
			</Suspense>
		</nav>
	);
};

export default Nav;
