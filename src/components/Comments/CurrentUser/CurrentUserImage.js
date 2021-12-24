import React from "react";

import { data } from "../../../assets/data";

const CurrentUserImage = (props) => {
	return (
		<img
			src={require(`../../../assets${data.currentUser.image.png}`)}
			alt=""
			className={`w-32px`}
		/>
	);
};

export default CurrentUserImage;
