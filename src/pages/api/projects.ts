import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const dirRelativeToPublicFolder = "projects";

	const dir = path.resolve("./public", dirRelativeToPublicFolder);

	const folderNames = fs.readdirSync(dir);
	const categories = folderNames.map((name) =>
		path.join(dirRelativeToPublicFolder, name)
	);

	const tree = {};
	categories.forEach((category) => {
		const folderDir = path.join("./public", category);
		const filenames = fs.readdirSync(folderDir);

		const projectFolder = filenames.map((name) => {
			const projectDir = path.resolve("./public", category, name);
			const images = fs.readdirSync(projectDir);
			return { [name]: images };
		});

		Object.assign(tree, { [path.basename(category)]: projectFolder });
	});

	return res.status(200).json(tree);
}
