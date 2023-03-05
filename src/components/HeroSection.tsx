/* eslint-disable @next/next/no-img-element */

type Props = { title: string; imageSrc: string };

const HeroSection = ({ title, imageSrc }: Props) => {
	return (
		<div className="container relative mx-auto my-8">
			<div className="absolute top-1/2 left-1/2 mb-4 flex h-32 w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
				<div className="h-full w-full bg-black opacity-60"></div>
				<h1 className="absolute text-center text-5xl font-bold tracking-widest text-primary">
					{title}
				</h1>
			</div>

			<img
				alt="hero image"
				src={imageSrc}
				className="mb-8 aspect-[9/16] w-full rounded-3xl object-cover object-center md:aspect-video"
			/>
		</div>
	);
};

export default HeroSection;
