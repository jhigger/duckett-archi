import type { GetServerSideProps } from "next";
import Head from "next/head";
import GetInTouch from "~/components/GetInTouch";
import HeroSection from "~/components/HeroSection";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";
import { env } from "~/env.mjs";

interface Project {
	imageSrc: string;
	title: string;
}
interface GalleryProps {
	residentials: Project[];
	commercials: Project[];
	concepts: Project[];
}

const Gallery = ({ residentials, commercials, concepts }: GalleryProps) => {
	return (
		<>
			<Head>
				<title>Gallery | Duckett Architecture</title>
			</Head>
			<main>
				<HeroSection
					title="Gallery"
					imageSrc="https://via.placeholder.com/1080x720?text=Image"
				/>

				<ProjectCarousel title="Residential">
					{residentials.map(({ imageSrc, title }, i) => {
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

				<ProjectCarousel title="Commercial">
					{commercials.map(({ imageSrc, title }, i) => {
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

				<ProjectCarousel title="Concepts">
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
				</ProjectCarousel>

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

export default Gallery;
