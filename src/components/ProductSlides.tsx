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
	CarouselItem,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

//object array with all products
const naturalProducts = [
	{
		id: 1,
		title: "Chá de Ervas",
		description:
			"Chá de ervas para relaxamento e bem-estar. Seleção e preparação das melhores folhas",
		price: "10,00", // En reales brasileños
		aspectRatio: "16:9",
		path: "/products/chá-de-ervas.webp",
	},
	{
		id: 2,
		title: "Óleo Essencial de Lavanda",
		description: "Óleo essencial de lavanda para aromaterapia e relaxamento.",
		price: "25,00", // En reales brasileños
		aspectRatio: "4:3",
		path: "/products/óleo-de-lavanda.webp",
	},
	{
		id: 3,
		title: "Suplemento de Vitamina C",
		description:
			"Suplemento de vitamina C para fortalecer o sistema imunológico.",
		price: "30,00", // En reales brasileños
		aspectRatio: "3:2",
		path: "/products/vitamina-c.webp",
	},
	{
		id: 4,
		title: "Creme Hidratante de Aloe Vera",
		description: "Creme hidratante de aloe vera para pele seca e irritada.",
		price: "15,00", // En reales brasileños
		aspectRatio: "16:9",
		path: "/products/creme-aloe-vera.webp",
	},
];

const ProductSlides = () => {
	return (
		<Carousel className='w-full max-w-[250px] md:max-w-md lg:max-w-xl lg:ml-6'>
			<CarouselContent>
				{naturalProducts.map((prod) => (
					<CarouselItem
						key={prod.id}
						className='pl-1 md:basis-1/2 lg:basis-1/3 '
					>
						<div className='p-1'>
							<Card>
								<CardHeader
									className='shadow-md'
									style={{
										backgroundImage: `url(${prod.path})`,
										//aspectRatio: prod.aspectRatio,
										height: "130px",
										backgroundSize: "cover",
									}}
								></CardHeader>
								<CardContent className='flex flex-col aspect-video md:aspect-square items-center justify-start p-6'>
									{/* aspect-square */}
									<CardTitle>{prod.title}</CardTitle>
									<CardDescription className=''>
										{prod.description}
									</CardDescription>
								</CardContent>
								<CardFooter>
									<div className='w-full flex justify-end'>
										<span className='text-primary font-bold mr-1'>Preço: </span>{" "}
										<span>{prod.price}</span>
									</div>
								</CardFooter>
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

export default ProductSlides;
