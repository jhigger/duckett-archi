import { FaFacebookSquare, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

type FooterLinkType = {
	title: string;
	href: string;
};

const Footer = () => {
	const footerLinks: FooterLinkType[] = [
		{
			title: "Our Location",
			href: "#",
		},
		{
			title: "Career",
			href: "#",
		},
		{
			title: "About",
			href: "#",
		},
		{
			title: "Contact",
			href: "#",
		},
	];

	return (
		<footer className="mt-8 grid grid-cols-1 place-items-center gap-16 p-8 text-center tracking-widest lg:grid-cols-2  xl:grid-cols-5">
			<div className=" row-span-1 lg:col-span-2">
				<Logo />
			</div>
			<div className="flex flex-col items-center justify-center gap-4">
				<p className="font-bold">&copy; Duckett Architecture Ltd.</p>
				<p className="font-bold">All Rights Reserved</p>
				<p>
					Web Design by{" "}
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary"
					>
						SG&nbsp;Designs
					</a>
				</p>
			</div>
			<ul className="row-span-2 flex flex-col items-center justify-center gap-2 lg:row-span-1">
				{footerLinks.map(({ title, href }, i) => {
					return (
						<li key={i}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{title}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="flex items-center justify-center gap-4">
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaTwitter size={24} />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaFacebookSquare size={24} />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaInstagram size={24} />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaGoogle size={24} />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
