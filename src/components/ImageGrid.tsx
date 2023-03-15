/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

type ImageGridProps = { images: string[] };

const ImageGrid = ({ images }: ImageGridProps) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index: number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	return (
		<>
			<div className="hidden w-full grid-cols-12 place-items-center gap-2 overflow-hidden md:grid">
				{images.length === 5 && (
					<FiveImages
						images={images}
						openImageViewer={openImageViewer}
					/>
				)}
				{images.length >= 6 && (
					<SixImages
						images={images}
						openImageViewer={openImageViewer}
					/>
				)}
			</div>
			<div className="flex flex-col gap-2 md:hidden">
				{images.map((_, i) => {
					return (
						<LowQualityImage
							key={i}
							images={images}
							openImageViewer={openImageViewer}
							index={i}
						/>
					);
				})}
			</div>
			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
					backgroundStyle={{
						backgroundColor: "rgba(0, 0, 0, 0.9)",
					}}
				/>
			)}
		</>
	);
};

interface ImagesProp {
	images: string[];
	openImageViewer: (index: number) => void;
}

const LowQualityImage = ({
	images,
	openImageViewer,
	index,
}: ImagesProp & { index: number }) => {
	return (
		<Image
			src={`${(images[index] as string).replaceAll("\\", "/")}`}
			alt="sample"
			onClick={() => openImageViewer(index)}
			className="h-full w-full object-cover object-center"
			width={1280}
			height={720}
			quality={1}
			priority
		/>
	);
};

const SixImages = ({ images, openImageViewer }: ImagesProp) => {
	return (
		<>
			<div className="col-span-8 row-span-2 aspect-video w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={0}
				/>
			</div>
			<div className="col-span-4 row-span-1 aspect-[16/8.934] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={1}
				/>
			</div>
			<div className="col-span-4 row-span-1 aspect-[16/8.934] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={2}
				/>
			</div>
			<div className="col-span-6 row-span-1 aspect-video w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={3}
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={4}
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={5}
				/>
			</div>
		</>
	);
};

const FiveImages = ({ images, openImageViewer }: ImagesProp) => {
	return (
		<>
			<div className="col-span-8 row-span-2 aspect-video w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={0}
				/>
			</div>
			<div className="col-span-4 row-span-2 aspect-[9/10.21] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={1}
				/>
			</div>
			<div className="col-span-6 row-span-1 aspect-video w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={2}
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={3}
				/>
			</div>
			<div className="col-span-3 row-span-1 aspect-[9/10.255] w-full overflow-hidden">
				<LowQualityImage
					images={images}
					openImageViewer={openImageViewer}
					index={4}
				/>
			</div>
		</>
	);
};

export default ImageGrid;
