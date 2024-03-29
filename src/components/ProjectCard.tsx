import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

type Props = {
	src: string;
	title: string;
	link: string;
};

const ProjectCard = ({ src, title, link }: Props) => {
	return (
		<div className="group relative h-min overflow-hidden rounded-2xl">
			<div className="hidden lg:block">
				<Image
					src={`/${src.replaceAll("\\", "/")}`}
					alt="project"
					width={640}
					height={360}
					quality={50}
					loading="lazy"
					className="h-[512px] w-[384px] object-cover object-center"
				/>
				<div className="absolute top-0 flex h-full w-full flex-col justify-end gap-4 bg-primary p-8 opacity-60 transition-all duration-300 ease-in-out group-hover:top-0 lg:top-[100%]"></div>
				<div className="absolute top-0 flex h-full w-full flex-col justify-end gap-4 p-8 transition-all duration-300 ease-in-out group-hover:top-0 lg:top-[100%]">
					<h3 className="text-4xl font-bold text-black">{title}</h3>
					<Link
						href={link}
						className="flex w-max items-center gap-4 self-end text-black hover:text-white"
					>
						<p>See Project</p>
						<BsChevronRight size={24} />
					</Link>
				</div>
			</div>
			<div className="block lg:hidden">
				<Link href={link}>
					<Image
						src={`/${src.replaceAll("\\", "/")}`}
						alt="project"
						width={640}
						height={360}
						quality={1}
						loading="lazy"
						className="h-[512px] w-[384px] object-cover object-center"
					/>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
