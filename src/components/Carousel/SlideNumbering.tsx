type Props = { index: number; length: number };

const SlideNumbering = ({ index, length }: Props) => {
	return (
		<div className="tracking-widest dark:invert">
			{index.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
			/
			{length.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
		</div>
	);
};

export default SlideNumbering;
