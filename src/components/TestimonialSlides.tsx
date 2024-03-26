import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

//object array with all services
const testimonialData = [
	{
		id: 1,
		path: "/testimonials/t-avt-1.webp",
		name: "Anne Smith",
		position: "Customer",
		aspectRatio: "1/1",
		description:
			"A tecnologia que utilizam em seus tratamentos é de última geração, o que me dá muita confiança nos resultados.",
	},
	{
		id: 2,
		path: "/testimonials/t-avt-2.webp",
		name: "Jane Doe",
		position: "Customer",
		aspectRatio: "1/1",
		description:
			"Consegui melhorar significativamente minha saúde. Não poderia estar mais satisfeito com o atendimento que recebi!",
	},
	{
		id: 3,
		path: "/testimonials/t-avt-3.webp",
		name: "Jhon Doe",
		position: "Customer",
		aspectRatio: "1/1",
		description:
			"Minha família e eu somos pacientes da donetClínica há anos e nunca ficamos desapontados. A recomendo",
	},
];

const TestimonialSlides = () => {
	return (
		<Carousel className='w-full max-w-[250px] md:max-w-md lg:max-w-xl'>
			<CarouselContent className='-ml-1'>
				{testimonialData.map((test) => (
					<CarouselItem
						key={test.id}
						className='pl-1 md:basis-1/2 lg:basis-1/3 '
					>
						<div className='p-1'>
							<Card>
								<CardHeader
									className='w-full'
									style={{
										backgroundImage: `url(${test.path})`,
										aspectRatio: test.aspectRatio,
										height: "100px",
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center",
									}}
								></CardHeader>
								<CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
									<CardTitle>{test.name}</CardTitle>
									<CardDescription className=''>
										{test.description}
									</CardDescription>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default TestimonialSlides;
