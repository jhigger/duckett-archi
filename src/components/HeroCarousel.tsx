import type { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { Arrows, Content } from "./Carousel";

type Props = { children: JSX.Element[] };

const HeroCarousel = ({ children }: Props) => {
	const splideRef = useRef<Splide | null>(null);
	const [index, setIndex] = useState<number>(0);
	const [length, setLength] = useState<number>(0);

	useEffect(() => {
		splideRef.current?.splide?.event.on("active", () => {
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
		<section className="relative mb-16">
			<Content
				ref={splideRef}
				slides={children}
				options={{
					arrows: false,
					rewind: true,
					heightRatio: 0.5625,
				}}
			/>
			<div className="absolute top-1/4 right-24 text-4xl text-gray-500">
				<span className="text-6xl text-primary">
					{index.toLocaleString("en-US", {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})}
				</span>
				/
				{length.toLocaleString("en-US", {
					minimumIntegerDigits: 2,
					useGrouping: false,
				})}
			</div>
			<div className="absolute right-24 bottom-12">
				<Arrows splideRef={splideRef} color="white" />
			</div>
		</section>
	);
};

export default HeroCarousel;
