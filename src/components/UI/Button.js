import React from "react";

const Button = (props) => {
	return (
		<button
			className={`${props.className} rounded-sm py-[12px] text-neutral-white `}
			type="button"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
