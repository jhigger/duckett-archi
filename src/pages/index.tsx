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
				<Carousel />
			</main>
		</>
	);
};

export default Home;
