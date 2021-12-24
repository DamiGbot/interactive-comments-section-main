import React from "react";

import FunctionButton from "../../UI/FunctionButton";

const CurrentUserEditButton = (props) => {
	return (
		<FunctionButton
			svg={require("../../../assets/images/icon-edit.svg").default}
			text="Edit"
			textColor="text-primary-moderateBlue"
		/>
	);
};

export default CurrentUserEditButton;
