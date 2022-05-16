import chooseColor from "./chooseColor";

interface Types {
	type?: "primary" | "secondary" | "success" | "error" | "inherit";
	width?: number;
	height?: number;
	onClick?: () => void;
}

export default function LoginIcon({
	type = "primary",
	width = 24,
	height = 24,
	onClick,
}: Types) {
	const color = chooseColor(type);
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => (onClick ? onClick() : null)}
		>
			<path
				d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 17L15 12M15 12L10 7M15 12H3"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}