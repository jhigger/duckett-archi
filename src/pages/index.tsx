/* eslint-disable @next/next/no-img-element */
import "@splidejs/react-splide/css";
import type { GetServerSideProps } from "next";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Button from "~/components/Button";
import GetInTouch from "~/components/GetInTouch";
import HeroCarousel from "~/components/HeroCarousel";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";
import { env } from "../env.mjs";

interface Project {
	imageSrc: string;
	title: string;
}
interface HomeProps {
	residentials: Project[];
	commercials: Project[];
	concepts: Project[];
}

const Home: NextPage<HomeProps> = ({ residentials, commercials, concepts }) => {
	const [active, setActive] = useState("All");

	const filters = [
		{ title: "All" },
		{ title: "Residential" },
		{ title: "Commercial" },
		{ title: "Concepts" },
	];

	const handleActive = (title: string) => {
		setActive(title);
	};

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
						<div className="clip absolute hidden h-full w-full flex-col justify-center bg-primary opacity-60 md:block"></div>
						<div className="absolute hidden h-full w-full grid-cols-2 place-items-center p-8 md:grid">
							<div className="flex flex-col gap-4">
								<h2 className="text-4xl font-bold">Title</h2>
								<p className="text-xl">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dignissimos, alias.
								</p>
								<Button
									title="BUTTON CTA"
									className="mt-8 w-max bg-white text-primary"
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

				<ul className="hidden items-center justify-end gap-8 tracking-widest md:flex">
					{filters.map(({ title }) => {
						const textColor =
							active === title ? "text-primary" : "text-inherit";

						return (
							<li key={title} className={`${textColor}`}>
								<button
									className="font-bold"
									onClick={() => handleActive(title)}
								>
									{title}
								</button>
							</li>
						);
					})}

					<li>
						<Link
							href="/gallery"
							className="font-bold text-gray-500"
						>
							View all
						</Link>
					</li>
				</ul>

				{["All", "Residential"].includes(active) && (
					<ProjectCarousel title="Residential">
						{residentials
							.slice(0, 5)
							.map(({ imageSrc, title }, i) => {
								return (
									<ProjectCard
										key={i}
										src={imageSrc}
										title={title}
										link={"#"}
									/>
								);
							})}
					</ProjectCarousel>
				)}

				{["All", "Commercial"].includes(active) && (
					<ProjectCarousel title="Commercial">
						{commercials
							.slice(0, 5)
							.map(({ imageSrc, title }, i) => {
								return (
									<ProjectCard
										key={i}
										src={imageSrc}
										title={title}
										link={"#"}
									/>
								);
							})}
					</ProjectCarousel>
				)}

				{["All", "Concepts"].includes(active) && (
					<ProjectCarousel title="Concepts">
						{concepts.slice(0, 5).map(({ imageSrc, title }, i) => {
							return (
								<ProjectCard
									key={i}
									src={imageSrc}
									title={title}
									link={"#"}
								/>
							);
						})}
					</ProjectCarousel>
				)}

				<GetInTouch />
			</main>
		</>
	);
};

interface ProjectFolders {
	Commercial: { [key: string]: string[] };
	Residential: { [key: string]: string[] };
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetch(env.NEXT_PUBLIC_HOST + "/api/projects")
		.then(async (data) => {
			const json = (await data.json()) as ProjectFolders;
			return json;
		})
		.catch((err) => {
			console.log(err);
		});

	if (!data) return { props: {} };
	const { Residential, Commercial }: ProjectFolders = data;

	const getImages = (category: ProjectFolders[keyof ProjectFolders]) => {
		return Object.keys(category).map((key) => {
			const image = category[key]?.[0];
			return {
				imageSrc: image,
				title: key,
			};
		});
	};

	const residentials = getImages(Residential);

	const commercials = getImages(Commercial);

	const concepts = Array<Project>(10).fill({
		imageSrc: "https://via.placeholder.com/1080x720?text=Image",
		title: "Title",
	});

	return {
		props: {
			residentials,
			commercials,
			concepts,
		},
	};
};

export default Home;
