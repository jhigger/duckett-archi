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
		<section className="relative mb-16 overflow-hidden rounded-2xl">
			<Content
				ref={splideRef}
				slides={children}
				options={{
					arrows: false,
					rewind: true,
					heightRatio: 0.5625,
					breakpoints: {
						425: {
							heightRatio: 1.5625,
						},
					},
				}}
			/>
			<div className="absolute top-12 right-12 text-4xl text-gray-500 md:right-24 md:top-1/4">
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
			<div className="absolute right-12 bottom-12 md:right-24">
				<Arrows splideRef={splideRef} color="white" />
			</div>
		</section>
	);
};

export default HeroCarousel;
