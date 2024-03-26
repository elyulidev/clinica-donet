import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

//object with info of social networks
const socials = [
	{
		id: 1,
		name: "Facebook",
		link: "https://facebook.com",
		icon: <FaFacebookF size={18} className='text-primary' />,
	},
	{
		id: 2,
		name: "Instagram",
		link: "https://instagram.com",
		icon: <FaInstagram size={18} className='text-primary' />,
	},
	{
		id: 3,
		name: "Twitter",
		link: "https://twitter.com",
		icon: <FaXTwitter size={18} className='text-primary' />,
	},
];
const Socials = () => {
	return (
		<div>
			<ul className='flex'>
				{socials.map((item) => (
					<li key={item.id} className={`text-foreground mr-2`}>
						<a href={item.link} target='_blank' rel='noopener noreferrer'></a>
						{item.icon}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Socials;
