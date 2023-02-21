import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	title,
	className = "",
	...rest
}: ButtonProps) => {
	return (
		<button
			className={`rounded-full bg-primary px-8 py-2 text-white transition-all duration-75 ease-out hover:brightness-110 active:scale-95 active:brightness-90 ${className}`}
			{...rest}
		>
			{title}
		</button>
	);
};

export default Button;
