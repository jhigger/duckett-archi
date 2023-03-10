/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ImageGrid = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = [
		"https://via.placeholder.com/1080x720?text=1",
		"https://via.placeholder.com/1080x720?text=2",
		"https://via.placeholder.com/1080x720?text=3",
		"https://via.placeholder.com/1080x720?text=4",
		"https://via.placeholder.com/1080x720?text=5",
		"https://via.placeholder.com/1080x720?text=6",
	];

	const openImageViewer = useCallback((index: number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	return (
		<div className="grid grid-cols-12 place-items-center gap-2 overflow-hidden">
			{/* src={`/${project[category]?.[name]?.[0] ?? ""}`} */}
			{images.length === 5 && (
				<FiveImages images={images} openImageViewer={openImageViewer} />
			)}
			{images.length >= 6 && (
				<SixImages images={images} openImageViewer={openImageViewer} />
			)}
			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}
		</div>
	);
};

interface ImagesProp {
	images: string[];
	openImageViewer: (index: number) => void;
}

const SixImages = ({ images, openImageViewer }: ImagesProp) => {
	return (
		<>
			<div className="col-span-8 row-span-2 aspect-video overflow-hidden">
				<img
					src={images[0]}
					alt="sample"
					onClick={() => openImageViewer(0)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-4 row-span-1 aspect-[16/8.934] overflow-hidden">
				<img
					src={images[1]}
					alt="sample"
					onClick={() => openImageViewer(1)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-4 row-span-1 aspect-[16/8.934] overflow-hidden">
				<img
					src={images[2]}
					alt="sample"
					onClick={() => openImageViewer(2)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-6 row-span-1 aspect-video overflow-hidden">
				<img
					src={images[3]}
					alt="sample"
					onClick={() => openImageViewer(3)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] overflow-hidden">
				<img
					src={images[4]}
					alt="sample"
					onClick={() => openImageViewer(4)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] overflow-hidden">
				<img
					src={images[5]}
					alt="sample"
					onClick={() => openImageViewer(5)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
		</>
	);
};

const FiveImages = ({ images, openImageViewer }: ImagesProp) => {
	return (
		<>
			<div className="col-span-8 row-span-2 aspect-video overflow-hidden">
				<img
					src={images[0]}
					alt="sample"
					onClick={() => openImageViewer(0)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-4 row-span-2 aspect-[9/10.21] overflow-hidden">
				<img
					src={images[1]}
					alt="sample"
					onClick={() => openImageViewer(1)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-6 row-span-1 aspect-video overflow-hidden">
				<img
					src={images[2]}
					alt="sample"
					onClick={() => openImageViewer(2)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] overflow-hidden">
				<img
					src={images[3]}
					alt="sample"
					onClick={() => openImageViewer(3)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] overflow-hidden">
				<img
					src={images[4]}
					alt="sample"
					onClick={() => openImageViewer(4)}
					className="h-full w-full object-cover object-center"
				/>
			</div>
		</>
	);
};

export default ImageGrid;
