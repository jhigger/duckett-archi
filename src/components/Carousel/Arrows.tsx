import { type Splide } from "@splidejs/react-splide";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
	splideRef: React.RefObject<Splide | null>;
	color: string;
	className: string;
};

const Arrows = ({ splideRef: ref, color, className }: Props) => {
	return (
		<div className={`flex gap-8 ${className}`}>
			<button
				onClick={() => {
					if (ref !== null && ref.current) {
						ref.current?.go("<");
					}
				}}
			>
				<BsChevronLeft size={24} color={color} />
			</button>
			<button
				onClick={() => {
					if (ref !== null && ref.current) {
						ref.current?.go(">");
					}
				}}
			>
				<BsChevronRight size={24} color={color} />
			</button>
		</div>
	);
};

export default Arrows;
