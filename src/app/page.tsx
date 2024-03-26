import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function HomePage() {
	return (
		<main>
			{/* Home */}
			<Home />
			{/* About */}
			<About />
			{/* Services */}
			<Services />
			{/* Team */}
			<Team />
			{/* Products */}
			<Products />
			{/* Testimonials */}
			<Testimonials />
			{/* Contacts */}
			<Contacts />
			{/* Footer */}
			<Footer />
		</main>
	);
}
