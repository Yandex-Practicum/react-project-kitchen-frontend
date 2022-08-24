export const ArrowIcon = ({ side = "left" }) => {
	if (side === "left") {
		return (
			<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6 11L1 6L6 1M13 11L8 6L13 1"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	} else if (side === "right") {
		return (
			<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8 11L13 6L8 1M1 11L6 6L1 1"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}
}
