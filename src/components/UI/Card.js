import React from "react";

const Card = (props) => {
	return (
		<div className={`p-16px bg-neutral-white rounded-sm ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
