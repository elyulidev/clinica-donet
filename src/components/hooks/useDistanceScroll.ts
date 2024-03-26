"use client";

import { useEffect, useState } from "react";

const useDistanceScroll = () => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setShowBtn(scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return showBtn;
};

export default useDistanceScroll;
