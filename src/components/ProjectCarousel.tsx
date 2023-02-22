import type { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { Arrows, Content } from "./Carousel";

type Props = { children: JSX.Element[] };

const ProjectCarousel = ({ children }: Props) => {
	const splideRef = useRef<Splide | null>(null);

	return (
		<section className="mb-16 flex flex-col">
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
				}}
			/>
			<div className="self-end">
				<Arrows splideRef={splideRef} color="black" className="m-4" />
			</div>
		</section>
	);
};

export default ProjectCarousel;
