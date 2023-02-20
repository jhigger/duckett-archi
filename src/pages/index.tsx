import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
	const ref = useRef<Splide>(null);
	useEffect(() => {
		if (ref.current) {
			ref.current.splide?.go(">");
		}
	}, []);

	return (
		<>
			<Head>
				<title>Duckett Architecture</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="relative">
					<Splide
						options={{ arrows: false, rewind: true, height: 580 }}
						aria-label="My Favorite Images"
						ref={ref}
					>
						<SplideSlide className="bg-blue-500">
							<div>1</div>
						</SplideSlide>
						<SplideSlide className="bg-red-500">
							<div>2</div>
						</SplideSlide>
					</Splide>

					<div className="absolute right-24 bottom-12 flex gap-8">
						<button onClick={() => ref.current?.splide?.go("<")}>
							prev
						</button>
						<button onClick={() => ref.current?.splide?.go(">")}>
							next
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
