/* eslint-disable @next/next/no-img-element */
import "@splidejs/react-splide/css";
import { type NextPage } from "next";
import Head from "next/head";
import Button from "~/components/Button";
import GetInTouch from "~/components/GetInTouch";
import HeroCarousel from "~/components/HeroCarousel";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Duckett Architecture</title>
			</Head>
			<main>
				<HeroCarousel>
					<div className="relative flex h-full items-center justify-center">
						<img
							src="https://via.placeholder.com/1080x720?text=Image"
							alt="slide"
							className="h-full w-full object-cover object-center"
						/>
						<div className="clip absolute h-full w-full flex-col justify-center bg-primary opacity-60"></div>
						<div className="absolute grid h-full w-full grid-cols-2 place-items-center p-8">
							<div className="flex flex-col gap-4">
								<h2 className="text-4xl font-bold">Title</h2>
								<p className="text-xl">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dignissimos, alias.
								</p>
								<Button
									title="BUTTON CTA"
									className="mt-8 w-max"
								/>
							</div>
						</div>
					</div>
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
					<ProjectCard
						src={"https://via.placeholder.com/1080x720?text=Image"}
						title={"Title"}
						link={"#"}
					/>
					<ProjectCard
						src={"https://via.placeholder.com/1080x720?text=Image"}
						title={"Title"}
						link={"#"}
					/>
					<ProjectCard
						src={"https://via.placeholder.com/1080x720?text=Image"}
						title={"Title"}
						link={"#"}
					/>
					<ProjectCard
						src={"https://via.placeholder.com/1080x720?text=Image"}
						title={"Title"}
						link={"#"}
					/>
					<ProjectCard
						src={"https://via.placeholder.com/1080x720?text=Image"}
						title={"Title"}
						link={"#"}
					/>
				</ProjectCarousel>

				<GetInTouch />
			</main>
		</>
	);
};

export default Home;
