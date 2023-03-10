/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import data from "~/projects.json";

interface Project {
	imageSrc: string;
	title: string;
}
interface ProjectProps {
	residentials: { [key: string]: string[] };
	commercials: { [key: string]: string[] };
}

const Project = ({ residentials, commercials }: ProjectProps) => {
	const router = useRouter();
	const { category, name } = router.query as {
		category?: string;
		name?: string;
	};

	const capitalizeWords = (str: string) => {
		return str.replace(/(?:^|\s)\S/g, (a) => {
			return a.toUpperCase();
		});
	};

	if (!category || !name) return;

	const project: { [key: string]: ProjectProps[keyof ProjectProps] } = {
		residential: residentials,
		commercial: commercials,
	};

	return (
		<div>
			{capitalizeWords(category)} / {capitalizeWords(name)}
			<img src={`/${project[category]?.[name]?.[0] ?? ""}`} alt="" />
		</div>
	);
};

interface ProjectFolders {
	Commercial: { [key: string]: string[] };
	Residential: { [key: string]: string[] };
}

const { Residential }: ProjectFolders = data;

const getTitles = (category: ProjectFolders[keyof ProjectFolders]) => {
	return Object.keys(category).map((key) => {
		return {
			title: key,
		};
	});
};

export const getStaticPaths: GetStaticPaths = () => {
	const residentials = getTitles(Residential);
	const map = residentials.map((project) => {
		return {
			params: {
				category: "residential",
				name: project.title.toLowerCase(),
			},
		};
	});

	return {
		paths: map,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = () => {
	const getImages = (category: ProjectFolders[keyof ProjectFolders]) => {
		const tree = {};
		Object.keys(category).forEach((projectName) => {
			const images = category[projectName];
			if (!images) return;

			Object.assign(tree, { [projectName.toLowerCase()]: images });
		});
		return tree;
	};

	const residentials = getImages(Residential);

	return {
		props: { residentials },
	};
};

export default Project;
