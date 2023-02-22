import "@splidejs/react-splide/css";
import { type NextPage } from "next";
import Head from "next/head";
import Button from "~/components/Button";
import HeroCarousel from "~/components/HeroCarousel";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Duckett Architecture</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<HeroCarousel>
					<div className="flex h-full items-center justify-center bg-blue-500">
						1
					</div>
					<div className="flex h-full items-center justify-center bg-red-500">
						2
					</div>
					<div className="flex h-full items-center justify-center bg-green-500">
						3
					</div>
				</HeroCarousel>

				<ProjectCarousel>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</ProjectCarousel>

				<Button title="BUTTON CTA" />
			</main>
		</>
	);
};

export default Home;
