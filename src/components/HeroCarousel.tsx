import type { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { Arrows, Content } from "./Carousel";

type Props = { children: JSX.Element[] };

const HeroCarousel = ({ children }: Props) => {
	const splideRef = useRef<Splide | null>(null);

	return (
		<div className="relative">
			<Content
				ref={splideRef}
				slides={children}
				options={{ arrows: false, rewind: true, height: 720 }}
			/>
			<div className="absolute right-24 bottom-12">
				<Arrows splideRef={splideRef} color="white" />
			</div>
		</div>
	);
};

export default HeroCarousel;
