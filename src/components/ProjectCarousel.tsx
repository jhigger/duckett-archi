import type { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { Arrows, Content } from "./Carousel";
import SlideNumbering from "./Carousel/SlideNumbering";

type Props = { title: string; children: JSX.Element[] };

const ProjectCarousel = ({ title, children }: Props) => {
	const splideRef = useRef<Splide | null>(null);
	const [index, setIndex] = useState<number>(0);
	const [length, setLength] = useState<number>(0);

	useEffect(() => {
		splideRef.current?.splide?.event.on("move", () => {
			if (splideRef.current?.splide) {
				setIndex(splideRef.current.splide.index + 1);
			}
		});
		if (splideRef.current?.splide) {
			setIndex(splideRef.current.splide.index + 1);
			setLength(splideRef.current.splide.length);
		}
	}, [splideRef]);

	return (
		<section className="mb-16 flex flex-col gap-8">
			<h2 className="text-2xl font-bold tracking-widest lg:text-4xl">
				{title}
			</h2>
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
				<Arrows splideRef={splideRef} color="black" className="mr-4">
					<SlideNumbering index={index} length={length} />
				</Arrows>
			</div>
		</section>
	);
};

export default ProjectCarousel;
