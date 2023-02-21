import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="mt-8 flex items-center justify-center gap-16 p-8">
			<Logo />
			<div className="flex flex-col items-center justify-center gap-4">
				<p>&copy; Ducktt Architecture</p>
				<p>All Rights Reserved</p>
				<p>
					Web Design by{" "}
					<a href="#" target="_blank" rel="noopener noreferrer">
						SG Designs
					</a>
				</p>
			</div>
			<ul className="flex flex-col items-center justify-center gap-2">
				<li>footer link 1</li>
				<li>footer link 2</li>
				<li>footer link 3</li>
				<li>footer link 4</li>
			</ul>
			<ul className="flex items-center justify-center gap-4">
				<li>social 1</li>
				<li>social 2</li>
			</ul>
		</footer>
	);
};

export default Footer;
