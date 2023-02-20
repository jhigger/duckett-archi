import Link from "next/link";
import { useRouter } from "next/router";

type Props = { title: string; href: string };

const NavLink = ({ title, href }: Props) => {
	const router = useRouter();
	const color = router.pathname === href ? "text-primary" : "text-black";
	return (
		<Link
			href={href}
			className={
				color +
				" transform bg-transparent py-2 px-4 font-bold tracking-wider transition duration-200 ease-in-out hover:-translate-y-1 hover:border-transparent hover:text-primary active:translate-y-1"
			}
		>
			{title}
		</Link>
	);
};

export default NavLink;
