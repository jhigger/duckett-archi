import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="mt-8 flex items-center justify-center gap-16 p-8">
			<Logo />
			<div className="flex flex-col items-center justify-center gap-4">
				<p className="font-bold">&copy; Ducktt Architecture</p>
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
			<ul className="flex flex-col items-center justify-center gap-2">
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						footer link 1
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						footer link 2
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						footer link 3
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						footer link 4
					</a>
				</li>
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
