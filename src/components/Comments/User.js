import React from "react";

const User = (props) => {
	return (
		<div className={`flex items-center gap-16px mb-16px`}>
			<img src={props.image} alt="" className={`w-32px`} />
			<p className={`text-neutral-darkBlue font-semibold`}>{props.username}</p>
			<p className={`text-neutral-grayishBlue`}>{props.createdAt}</p>
		</div>
	);
};

export default User;
