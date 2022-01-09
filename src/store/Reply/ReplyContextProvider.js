import React, { useState, useReducer } from "react";

import { ReplyContext } from "./reply-context";

const defaultState = {
	replyingTo: "",
	replyingId: "",
	inputText: "",
};

const variableReducer = (state, actions) => {
	if (actions.type === "CHANGE") {
		return {
			replyingTo: actions.replying,
			replyingId: actions.id,
			inputText: state.inputText,
		};
	}

	if (actions.type === "TEXT") {
		return {
			replyingTo: actions.replying,
			replyingId: actions.id,
			inputText: state.inputText,
		};
	}

	return defaultState;
};

const ReplyContextProvider = (props) => {
	const [replyVariables, dispatch] = useReducer(variableReducer, defaultState);

	const repliesHandler = (id, replying) => {
		dispatch({ type: "CHANGE", id, replying });
	};

	const testAreaHandler = (text) => {
		dispatch({ type: "TEXT", val: text });
	};

	return (
		<ReplyContext.Provider
			value={{
				replyId: replyVariables.replyingId,
				replyTo: replyVariables.replyingTo,
				atText: replyVariables.inputText,
				getRepliesVariables: repliesHandler,
			}}
		>
			{props.children}
		</ReplyContext.Provider>
	);
};

export default ReplyContextProvider;
