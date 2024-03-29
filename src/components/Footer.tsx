import Logo from "./Logo";
import Socials from "./Socials";

type FooterLinkType = {
	title: string;
	href: string;
};

const Footer = ({ darkMode }: { darkMode: boolean }) => {
	const footerLinks: FooterLinkType[] = [
		{
			title: "Our Location",
			href: "https://goo.gl/maps/T1KRJVidMAowkGTw5",
		},
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Contact",
			href: "/contact",
		},
	];

	return (
		<footer className="mt-8 grid grid-cols-1 place-items-center gap-16 p-8 text-center tracking-widest lg:grid-cols-2  xl:grid-cols-5">
			<div className=" row-span-1 lg:col-span-2">
				<Logo darkMode={darkMode} />
			</div>
			<div className="flex flex-col items-center justify-center gap-4 text-sm lg:text-base">
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
			<ul className="row-span-2 flex flex-col items-center justify-center gap-2 text-sm lg:row-span-1 lg:text-base">
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
				<Socials />
			</ul>
		</footer>
	);
};

export default Footer;
