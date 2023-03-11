import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

const Logo = () => {
	return (
		<Link href="/">
			<Image
				src={logo}
				alt="logo"
				width={516}
				height={104}
				loading="eager"
				className="max-w-[10rem] sm:max-w-sm lg:max-w-full"
			/>
		</Link>
	);
};

export default Logo;
