import type { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { Arrows, Content } from "./Carousel";

type Props = { title: string; children: JSX.Element[] };

const ProjectCarousel = ({ title, children }: Props) => {
	const splideRef = useRef<Splide | null>(null);

	return (
		<section className="mb-16 flex flex-col gap-8">
			<h2 className="text-4xl font-bold tracking-widest">{title}</h2>
			<Content
				ref={splideRef}
				slides={children}
				options={{
					arrows: false,
					rewind: true,
					perPage: 3,
					autoWidth: true,
					gap: "1rem",
					pagination: false,
					type: "loop",
					perMove: 1,
					breakpoints: {
						480: {
							autoWidth: false,
							fixedWidth: "347px",
						},
					},
				}}
			/>
			<div className="self-end">
				<Arrows splideRef={splideRef} color="black" className="mr-4" />
			</div>
		</section>
	);
};

export default ProjectCarousel;
