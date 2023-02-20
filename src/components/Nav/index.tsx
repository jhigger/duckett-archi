import Logo from "../Logo";
import NavLink from "./Link";

const Nav = () => {
	const links = [
		{ title: "Home", href: "/" },
		{ title: "About", href: "/about" },
		{ title: "Gallery", href: "/gallery" },
		{ title: "Contact", href: "/contact" },
	];

	return (
		<div className="mb-8 flex items-center justify-between">
			<Logo />
			<div className="mb-4 flex gap-4 self-end uppercase">
				{links.map(({ title, href }) => {
					return <NavLink key={href} title={title} href={href} />;
				})}
			</div>
		</div>
	);
};

export default Nav;
