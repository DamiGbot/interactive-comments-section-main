import React from "react";

const Content = (props) => {
	return (
		<p className={`mb-16px text-neutral-grayishBlue`}>
			{props.replyingTo ? (
				<span className={`font-bold text-primary-moderateBlue`}>
					@{props.replyingTo}&nbsp;
				</span>
			) : (
				""
			)}
			{props.content}
		</p>
	);
};

export default Content;
