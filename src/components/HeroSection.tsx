/* eslint-disable @next/next/no-img-element */

type Props = { title: string; imageSrc: string };

const HeroSection = ({ title, imageSrc }: Props) => {
	return (
		<div className="container mx-auto my-8">
			<h1 className="mb-4 text-center text-4xl font-bold tracking-widest">
				{title}
			</h1>

			<img
				alt="hero image"
				src={imageSrc}
				className="mb-8 aspect-video w-full rounded-3xl object-cover object-center"
			/>
		</div>
	);
};

export default HeroSection;
