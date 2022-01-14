import React from "react";
//TODO
export const ReplyContext = React.createContext({
	replyId: "",
	replyTo: "",
	isReply: false,
	getRepliesVariables: () => {},
	// textAreaInput: () => {},
});
