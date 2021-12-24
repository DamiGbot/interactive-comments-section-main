import React from "react";
import FunctionButton from "../../UI/FunctionButton";

const ReplyButton = () => {
	return (
		<FunctionButton
			style={`-mb-[2px]`}
			svg={require("../../../assets/images/icon-reply.svg").default}
			text="Reply"
			textColor="text-primary-moderateBlue"
		/>
	);
};

export default ReplyButton;
