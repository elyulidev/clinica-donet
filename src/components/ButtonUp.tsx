"use client";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";
import useDistanceScroll from "./hooks/useDistanceScroll";
import Link from "next/link";

const ButtonUp = () => {
	const showBtn = useDistanceScroll();

	const styleBtn = showBtn
		? "fixed bottom-12 right-3 z-50 transition-all ease-in-out duration-700 delay-300 opacity-100 animate-bounce"
		: "hidden transition-all ease-in-out duration-700 delay-300 opacity-0";
	return (
		<Link href='#home' className='hidden lg:block'>
			<Button className={styleBtn}>
				<FaArrowUp />
			</Button>
		</Link>
	);
};

export default ButtonUp;
