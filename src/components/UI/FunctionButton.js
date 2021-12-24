import React from "react";

const FunctionButton = (props) => {
	return (
		<div
			onClick={props.onClick}
			className="inline-block float-right mt-8px ml-16px "
		>
			<div
				className={`rounded-[10px]  flex gap-8px items-center cursor-pointer`}
			>
				<span className={props.style ? props.style : ""}>
					<img alt="" src={props.svg} />
				</span>
				<p className={`font-bold ${props.textColor}`}>{props.text}</p>
			</div>
		</div>
	);
};

export default FunctionButton;
