import Head from "next/head";
import GetInTouch from "~/components/GetInTouch";
import HeroSection from "~/components/HeroSection";
import ProjectCard from "~/components/ProjectCard";
import ProjectCarousel from "~/components/ProjectCarousel";
import { commercials, concepts, residentials } from "~/utils/projects";

const Gallery = () => {
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

export default Gallery;
