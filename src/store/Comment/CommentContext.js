import React from "react";

export const CommentContext = React.createContext({
	Data: [],
	resetValue: "",
	score: 0,
	textAreaContent: "",
	replyComment: () => {},
	addComment: () => {},
	deleteComment: () => {},
});
