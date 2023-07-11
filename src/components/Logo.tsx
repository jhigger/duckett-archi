import Image from "next/image";
import Link from "next/link";
import logo_light from "/public/logo_light.jpg";
import logo_dark from "/public/logo_dark.png";
import icon from "/public/DA_LOGO.png";

const Logo = ({ darkMode }: { darkMode: boolean }) => {
	return (
		<Link href="/">
			<Image
				src={darkMode ? logo_dark : logo_light}
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
