import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { forwardRef, useRef } from "react";
import Arrows from "./Arrows";

const Carousel = () => {
	const splideRef = useRef<Splide | null>(null);

	return (
		<div className="relative">
			<Content ref={splideRef} />
			<div className="absolute right-24 bottom-12">
				<Arrows splideRef={splideRef} color="white" />
			</div>
		</div>
	);
};

// eslint-disable-next-line react/display-name
const Content = forwardRef<Splide>(({}, ref) => {
	return (
		<Splide
			options={{ arrows: false, rewind: true, height: 720 }}
			aria-label="Hero Carousel"
			ref={ref}
		>
			<SplideSlide className="bg-blue-500">
				<div className="flex h-full items-center justify-center">1</div>
			</SplideSlide>
			<SplideSlide className="bg-red-500">
				<div className="flex h-full items-center justify-center">2</div>
			</SplideSlide>
			<SplideSlide className="bg-green-500">
				<div className="flex h-full items-center justify-center">3</div>
			</SplideSlide>
		</Splide>
	);
});

export default Carousel;
