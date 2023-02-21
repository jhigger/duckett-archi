import { Splide, SplideSlide } from "@splidejs/react-splide";
import { forwardRef } from "react";

type Props = {
	slides: JSX.Element[];
};
// eslint-disable-next-line react/display-name
const Content = forwardRef<Splide, Props>(({ slides }: Props, ref) => {
	return (
		<Splide
			options={{ arrows: false, rewind: true, height: 720 }}
			aria-label="Carousel"
			ref={ref}
		>
			{slides.map((slide, i) => (
				<SplideSlide key={i}>{slide}</SplideSlide>
			))}
		</Splide>
	);
});

export default Content;
