import Link from "next/link";
import Button from "./Button";

const GetInTouch = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-8 py-16">
			<h2 className="text-4xl font-bold tracking-widest">Get in Touch</h2>
			<Link href="/contact">
				<Button title="Contact Us" className="text-white" />
			</Link>
		</section>
	);
};

export default GetInTouch;
