import React from "react";
//TODO
export const ReplyContext = React.createContext({
	replyId: "",
	replyTo: "",
	atText: "",
	getRepliesVariables: () => {},
});
