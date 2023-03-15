import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo";
import NavLink from "./Link";

type NavProps = { darkMode: boolean; toggleDarkMode: () => void };

const Nav = ({ darkMode, toggleDarkMode }: NavProps) => {
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
					<button
						role="button"
						aria-label="Dark mode"
						onClick={toggleDarkMode}
					>
						{darkMode ? <FaMoon /> : <FaSun />}
					</button>
				</div>

				<div className="mr-4 flex gap-4 lg:hidden">
					<button
						className="rounded p-2 text-primary hover:bg-primary hover:text-white"
						onClick={toggleMenu}
					>
						<GiHamburgerMenu size={24} />
					</button>
					<button
						role="button"
						aria-label="Dark mode"
						onClick={toggleDarkMode}
					>
						{darkMode ? <FaMoon /> : <FaSun />}
					</button>
				</div>
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
