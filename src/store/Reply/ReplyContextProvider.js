import React, { useReducer } from "react";

import { ReplyContext } from "./reply-context";

const defaultState = {
	replyingTo: "",
	replyingId: "",
	isReplying: false,
};

const variableReducer = (state, actions) => {
	if (actions.type === "CHANGE") {
		return {
			replyingTo: actions.replying,
			replyingId: actions.id,
			isReplying: actions.reply,
		};
	}

	return defaultState;
};

const ReplyContextProvider = (props) => {
	const [replyVariables, dispatch] = useReducer(variableReducer, defaultState);

	const repliesHandler = (id = "", replying = "", reply) => {
		dispatch({ type: "CHANGE", id, replying, reply });
	};

	return (
		<ReplyContext.Provider
			value={{
				replyId: replyVariables.replyingId,
				replyTo: replyVariables.replyingTo,
				isReply: replyVariables.isReplying,
				getRepliesVariables: repliesHandler,
			}}
		>
			{props.children}
		</ReplyContext.Provider>
	);
};

export default ReplyContextProvider;
