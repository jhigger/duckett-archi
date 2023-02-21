/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const ProjectCard = () => {
	return (
		<div className="group relative h-[512px] w-[384px] overflow-hidden">
			<div className="">
				<img
					alt="project"
					src="https://via.placeholder.com/1080x720?text=Image"
					width={384}
					height={512}
					className="h-[512px] w-[384px] object-cover object-center"
				/>
			</div>
			<div className="absolute top-[100%] flex h-full w-full flex-col justify-end gap-4 bg-primary p-8 opacity-60 transition-all duration-300 ease-in-out group-hover:top-0">
				<h3 className="text-4xl font-bold">Title</h3>
				<Link href="#" className="flex w-max items-center gap-4">
					<p>See Project</p>
					<BsChevronRight size={24} />
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
