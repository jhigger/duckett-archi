interface Project {
	imageSrc: string;
	title: string;
}

const residentials = Array<Project>(10).fill({
	imageSrc: "https://via.placeholder.com/1080x720?text=Image",
	title: "Title",
});

const commercials = Array<Project>(10).fill({
	imageSrc: "https://via.placeholder.com/1080x720?text=Image",
	title: "Title",
});

const concepts = Array<Project>(10).fill({
	imageSrc: "https://via.placeholder.com/1080x720?text=Image",
	title: "Title",
});

export { residentials, commercials, concepts };
