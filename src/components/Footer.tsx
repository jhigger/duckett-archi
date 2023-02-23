import Logo from "./Logo";

type FooterLinkType = {
	title: string;
	href: string;
};

const Footer = () => {
	const footerLinks: FooterLinkType[] = [
		{
			title: "footer link 1",
			href: "#",
		},
		{
			title: "footer link 2",
			href: "#",
		},
		{
			title: "footer link 3",
			href: "#",
		},
		{
			title: "footer link 4",
			href: "#",
		},
	];

	return (
		<footer className="mt-8 grid grid-cols-1 place-items-center gap-16 p-8 text-center lg:grid-cols-2 xl:grid-cols-5">
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
						SG Designs
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
						social link 1
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						social link 2
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
