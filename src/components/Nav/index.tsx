import Logo from "../Logo";
import NavLink from "./Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
	const links = [
		{ title: "Home", href: "/" },
		{ title: "About", href: "/about" },
		{ title: "Gallery", href: "/gallery" },
		{ title: "Contact", href: "/contact" },
	];

	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	return (
		<nav className="mb-8 flex flex-col">
			<div className="flex items-center justify-between">
				<Logo />
				<div className="mb-4 mr-4 hidden gap-4 self-end uppercase lg:flex">
					{links.map(({ title, href }) => {
						return <NavLink key={href} title={title} href={href} />;
					})}
				</div>

				<button
					className="mr-4 block rounded p-2 text-primary hover:bg-primary hover:text-white lg:hidden"
					onClick={toggleMenu}
				>
					<GiHamburgerMenu size={24} />
				</button>
			</div>

			{open && (
				<div className="m-4 flex flex-col gap-4 text-center text-sm uppercase lg:hidden">
					{links.map(({ title, href }) => {
						return <NavLink key={href} title={title} href={href} />;
					})}
				</div>
			)}
		</nav>
	);
};

export default Nav;
