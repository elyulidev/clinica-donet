"use client";
import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				"Medicina Ortomolecular 🧑‍🔬",
				1500, // wait 1s before replacing "Mice" with "Hamsters"
				"Produtos Naturais 🥝",
				1500,
				"Cuidados Especializados 🥇",
				1500,
				"+ 10 anos de Experiência 👍",
				1500,
			]}
			speed={50}
			className='text-xl text-primary font-bold md:text-xl'
			repeat={Infinity}
		/>
	);
};

export default TextEffect;
