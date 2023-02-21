import type { Options } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { forwardRef } from "react";

type Props = {
	slides: JSX.Element[];
	options: Options;
};
// eslint-disable-next-line react/display-name
const Content = forwardRef<Splide, Props>(({ slides, options }: Props, ref) => {
	return (
		<Splide options={options} aria-label="Carousel" ref={ref}>
			{slides.map((slide, i) => (
				<SplideSlide key={i}>{slide}</SplideSlide>
			))}
		</Splide>
	);
});

export default Content;
