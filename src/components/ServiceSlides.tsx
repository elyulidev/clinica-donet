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
const servicesClinic = [
	{
		id: 1,
		title: "Medicina Ortomolecular",
		path: "/services/medicina-ortomolecular.webp",
		aspectRatio: "4/3" /* 673/504 */,
		description: "Restaura o equilíbrio químico do corpo",
		price: "120,00", // En reales brasileños
	},
	{
		id: 2,
		title: "Ultrassom",
		path: "/services/ultrasonido.webp",
		aspectRatio: "4/3",
		description:
			"Ultrassom para avaliar a saúde e estrutura interna de órgãos.",
		price: "200,00", // En reales brasileños
	},
	{
		id: 3,
		title: "Fisioterapia",
		path: "/services/fisioterapia.webp",
		aspectRatio: "4/3",
		description:
			"Tratamento fisioterapêutico para reabilitação e recuperação de lesões.",
		price: "80,00", // En reales brasileños
	},
	{
		id: 4,
		title: "Produtos naturais",
		path: "/services/produtos.webp",
		aspectRatio: "4/3",
		description:
			"Produtos naturais para complementar o tratamento e cuidado da saúde.",
		price: "Varia", // Precio variable
	},
];

const ServiceSlides = () => {
	return (
		<Carousel className='w-full max-w-[250px] md:max-w-md lg:max-w-xl'>
			<CarouselContent className='-ml-1'>
				{servicesClinic.map((serv) => (
					<CarouselItem
						key={serv.id}
						className='pl-1 md:basis-1/2 lg:basis-1/3 '
					>
						<div className='p-1'>
							<Card>
								<CardHeader
									className='shadow-md'
									style={{
										backgroundImage: `url(${serv.path})`,
										//aspectRatio: serv.aspectRatio,
										height: "130px",
										backgroundSize: "cover",
									}}
								></CardHeader>
								<CardContent className='flex flex-col aspect-video md:aspect-square items-center justify-start p-6'>
									{/* aspect-square */}
									<CardTitle>{serv.title}</CardTitle>
									<CardDescription className=''>
										{serv.description}
									</CardDescription>
								</CardContent>
								<CardFooter>
									<div className='w-full flex justify-end'>
										<span className='text-primary font-bold mr-1'>Preço: </span>{" "}
										<span>{serv.price}</span>
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

export default ServiceSlides;
