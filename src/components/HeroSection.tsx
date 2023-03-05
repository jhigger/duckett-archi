/* eslint-disable @next/next/no-img-element */

type Props = { title: string; imageSrc: string };

const HeroSection = ({ title, imageSrc }: Props) => {
	return (
		<div>
			<h1 className="mb-4 text-center text-4xl font-bold tracking-widest">
				{title}
			</h1>

			<img
				alt="hero image"
				src={imageSrc}
				width={1080}
				height={720}
				className="mb-8 max-h-[720px] w-screen rounded-3xl object-cover object-center"
			/>
		</div>
	);
};

export default HeroSection;
