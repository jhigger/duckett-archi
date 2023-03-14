import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import icon from "/public/DA_LOGO.png";

const Logo = () => {
	return (
		<Link href="/">
			<Image
				src={logo}
				alt="logo"
				width={516}
				height={104}
				className="hidden sm:block lg:max-w-full"
				priority
			/>
			<Image
				src={icon}
				alt="logo"
				width={40}
				height={40}
				className="block rounded sm:hidden lg:max-w-full"
				priority
			/>
		</Link>
	);
};

export default Logo;
