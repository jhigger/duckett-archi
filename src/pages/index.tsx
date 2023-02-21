import "@splidejs/react-splide/css";
import { type NextPage } from "next";
import Head from "next/head";
import Carousel from "~/components/Carousel";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Duckett Architecture</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Carousel>
					<div className="flex h-full items-center justify-center bg-blue-500">
						1
					</div>
					<div className="flex h-full items-center justify-center bg-red-500">
						2
					</div>
					<div className="flex h-full items-center justify-center bg-green-500">
						3
					</div>
				</Carousel>
			</main>
		</>
	);
};

export default Home;
