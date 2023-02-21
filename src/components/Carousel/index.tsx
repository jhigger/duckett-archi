import type { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import Arrows from "./Arrows";
import Content from "./Content";

type Props = { children: JSX.Element[] };

const Carousel = ({ children }: Props) => {
	const splideRef = useRef<Splide | null>(null);

	return (
		<div className="relative">
			<Content ref={splideRef} slides={children} />
			<div className="absolute right-24 bottom-12">
				<Arrows splideRef={splideRef} color="white" />
			</div>
		</div>
	);
};

export default Carousel;
