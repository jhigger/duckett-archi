import "@splidejs/react-splide/css";
import { type NextPage } from "next";
import Head from "next/head";
import GetInTouch from "~/components/GetInTouch";
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

				<ProjectCarousel title="Latest Projects">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</ProjectCarousel>

				<GetInTouch />
			</main>
		</>
	);
};

export default Home;
