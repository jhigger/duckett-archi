import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ImageGrid from "~/components/ImageGrid";
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
		return str.replace(/(?:^|\s)\S|(?:sb)/g, (a) => {
			return a.toUpperCase();
		});
	};

	if (!category || !name) return;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const project: { [key: string]: ProjectProps[keyof ProjectProps] } = {
		residential: residentials,
		commercial: commercials,
	};

	return (
		<>
			<Head>
				<title>Gallery | Duckett Architecture</title>
			</Head>
			<main>
				<h1 className="my-12 text-center text-4xl font-bold tracking-widest text-primary">
					{capitalizeWords(category)}
				</h1>

				<div className="container mx-auto flex flex-col gap-8">
					<section className="flex flex-col gap-4">
						<h2 className="mb-4 text-2xl font-bold uppercase">
							{capitalizeWords(name)}
						</h2>

						<ImageGrid
							images={
								project[category]?.[name]?.map(
									(item) => `/${item}`
								) ?? []
							}
						/>
					</section>
				</div>
			</main>
		</>
	);
};

interface ProjectFolders {
	Commercial: { [key: string]: string[] };
	Residential: { [key: string]: string[] };
}

const { Residential, Commercial }: ProjectFolders = data;

const getTitles = (category: ProjectFolders[keyof ProjectFolders]) => {
	return Object.keys(category).map((key) => {
		return {
			title: key,
		};
	});
};

export const getStaticPaths: GetStaticPaths = () => {
	const residentials = getTitles(Residential);
	const commercials = getTitles(Commercial);

	const map = residentials.map((project) => {
		return {
			params: {
				category: "residential",
				name: project.title.toLowerCase(),
			},
		};
	});

	const map2 = commercials.map((project) => {
		return {
			params: {
				category: "commercial",
				name: project.title.toLowerCase(),
			},
		};
	});

	return {
		paths: map.concat(map2),
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
	const commercials = getImages(Commercial);

	return {
		props: { residentials, commercials },
	};
};

export default Project;
