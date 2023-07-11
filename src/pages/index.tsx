import "@splidejs/react-splide/css";
import type { GetStaticProps } from "next";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "~/components/Button";
import GetInTouch from "~/components/GetInTouch";
import HeroCarousel from "~/components/HeroCarousel";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";
import data from "~/projects.json";

interface Project {
	imageSrc: string;
	title: string;
}
interface HomeProps {
	residentials: Project[];
	commercials: Project[];
	concepts: Project[];
}

const Home: NextPage<HomeProps> = ({ residentials, commercials }) => {
	const [active, setActive] = useState("All");

	const filters = [
		{ title: "All" },
		{ title: "Residential" },
		{ title: "Commercial" },
		// { title: "Concepts" },
	];

	const handleActive = (title: string) => {
		setActive(title);
	};

	return (
		<>
			<Head>
				<title>Duckett Architecture | Palmerston North</title>
				<link
					rel="canonical"
					href="https://www.duckettarchitecture.co.nz/"
				/>
			</Head>
			<main>
				<HeroCarousel>
					<div className="relative flex h-full items-center justify-center">
						<Image
							src="/images/door.jpg"
							alt="slide"
							width={854}
							height={480}
							quality={60}
							className="h-full w-full object-cover object-center"
							priority
						/>
						<div className="clip absolute hidden h-full w-full flex-col justify-center bg-primary opacity-60 md:block"></div>
						<div className="absolute hidden h-full w-full grid-cols-2 place-items-center p-8 md:grid">
							<div className="flex flex-col gap-4">
								<h1 className="text-4xl font-bold text-black">
									Welcome To Duckett Architecture
								</h1>
								<Link href="/about">
									<Button
										title="More Info"
										className="mt-8 w-max bg-white text-primary"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative flex h-full items-center justify-center">
						<Image
							src="/projects/Residential/617%20Church%20Street/IMG_7548.JPG"
							alt="slide"
							width={854}
							height={480}
							quality={60}
							className="h-full w-full object-cover object-center"
							priority
						/>
						<div className="clip absolute hidden h-full w-full flex-col justify-center bg-primary opacity-60 md:block"></div>
						<div className="absolute hidden h-full w-full grid-cols-2 place-items-center p-8 md:grid">
							<div className="flex flex-col gap-4">
								<p className="text-3xl font-semibold leading-normal text-black">
									We transform space... <br />
									simply and effectively.
								</p>
								<Link href="/project/residential/617%20church%20street">
									<Button
										title="See Project"
										className="mt-8 w-max bg-white text-primary"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative flex h-full items-center justify-center">
						<Image
							src="/projects/Commercial/Turners%20North%20Shore/a.jpg"
							alt="slide"
							width={854}
							height={480}
							quality={60}
							className="h-full w-full object-cover object-center"
							priority
						/>
						<div className="clip absolute hidden h-full w-full flex-col justify-center bg-primary opacity-60 md:block"></div>
						<div className="absolute hidden h-full w-full grid-cols-2 place-items-center p-8 md:grid">
							<div className="flex flex-col gap-4">
								<p className="text-3xl font-semibold leading-normal text-black">
									We think outside the square to create all
									manner of architecture design solution.
								</p>
								<Link href="/project/commercial/turners north shore">
									<Button
										title="See Project"
										className="mt-8 w-max bg-white text-primary"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative flex h-full items-center justify-center">
						<Image
							src="/images/7.jpg"
							alt="slide"
							width={480}
							height={854}
							quality={60}
							className="h-full w-full object-cover object-center"
							priority
						/>
						<div className="clip absolute hidden h-full w-full flex-col justify-center bg-primary opacity-60 md:block"></div>
						<div className="absolute hidden h-full w-full grid-cols-2 place-items-center p-8 md:grid">
							<div className="flex flex-col gap-4">
								<p className="text-3xl font-semibold leading-normal text-black">
									Vision transforms a simple design brief into
									a client&apos;s dream.
								</p>
								<Link href="/contact">
									<Button
										title="Get In Touch"
										className="mt-8 w-max bg-white text-primary"
									/>
								</Link>
							</div>
						</div>
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
										link={`project/residential/${title}`}
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
										link={`project/commercial/${title}`}
									/>
								);
							})}
					</ProjectCarousel>
				)}

				{/* {["All", "Concepts"].includes(active) && (
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
				)} */}

				<GetInTouch />
			</main>
		</>
	);
};

interface ProjectFolders {
	Commercial: { [key: string]: string[] };
	Residential: { [key: string]: string[] };
}

export const getStaticProps: GetStaticProps = () => {
	if (!data)
		return {
			props: {
				residentials: Array<Project>(10).fill({
					imageSrc: "https://via.placeholder.com/1080x720?text=Image",
					title: "Title",
				}),
				commercials: Array<Project>(10).fill({
					imageSrc: "https://via.placeholder.com/1080x720?text=Image",
					title: "Title",
				}),
				concepts: Array<Project>(10).fill({
					imageSrc: "https://via.placeholder.com/1080x720?text=Image",
					title: "Title",
				}),
			},
		};
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
