import type { GetStaticProps } from "next";
import Head from "next/head";
import GetInTouch from "~/components/GetInTouch";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";
import data from "~/projects.json";

interface Project {
	imageSrc: string;
	title: string;
}
interface GalleryProps {
	residentials: Project[];
	commercials: Project[];
	concepts: Project[];
}

const Gallery = ({ residentials, commercials }: GalleryProps) => {
	return (
		<>
			<Head>
				<title>Gallery | Duckett Architecture</title>
				<link
					rel="canonical"
					href="https://www.duckettarchitecture.co.nz/gallery"
				/>
			</Head>
			<main>
				<h1 className="my-12 text-center text-4xl font-bold tracking-widest text-primary">
					Gallery
				</h1>

				<ProjectCarousel title="Residential">
					{residentials.map(({ imageSrc, title }, i) => {
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

				<ProjectCarousel title="Commercial">
					{commercials.map(({ imageSrc, title }, i) => {
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

				{/* <ProjectCarousel title="Concepts">
					{concepts.map(({ imageSrc, title }, i) => {
						return (
							<ProjectCard
								key={i}
								src={imageSrc}
								title={title}
								link={"#"}
							/>
						);
					})}
				</ProjectCarousel> */}

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

export default Gallery;
