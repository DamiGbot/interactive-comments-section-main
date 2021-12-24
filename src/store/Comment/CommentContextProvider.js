import React, { useRef, useState, useReducer } from "react";

import { CommentContext } from "./CommentContext";
import { data } from "../../assets/data";

const defaultState = {
	commentData: data,
	newComment: {
		id: Math.random().toString(),
		content: "",
		createdAt: "2 secs ago",
		score: 0,
		user: data.currentUser,
		replies: [],
	},
};

const commentReducer = (state, action) => {
	if (action.type === "ADD") {
		if (action.comment.current.value.trim().length !== 0) {
			let updatedComment = {
				...state.newComment,
				content: action.comment.current.value,
			};
			let newInput = state.commentData.comments.concat(updatedComment);
			let updatedData = { ...state.data, comments: newInput };

			return {
				newComment: updatedComment,
				commentData: updatedData,
			};
		} else {
			return { commentData: state.commentData, newComment: state.newComment };
		}
	}

	if (action.type === "DELETE") {
		let currentComment = state.commentData.comments.filter(
			(el) => el.id === action.id
		);
		let updatedData = state.commentData.comments.filter(
			(el) => el.id !== action.id
		);
		console.log(currentComment);
		console.log(updatedData);
		return { commentData: state.commentData, newComment: state.newComment };
	}

	return defaultState;
};

const CommentContextProvider = (props) => {
	const [commentState, dispatchCommentState] = useReducer(
		commentReducer,
		defaultState
	);

	let textareaInput = useRef();

	const [textInput, setTextInput] = useState(null);

	const replyHandler = (value) => {
		dispatchCommentState({ type: "REPLY", replyingTo: value });
		setTextInput("");
		console.log(value.current.value, commentState);
	};

	const addHandler = (value) => {
		dispatchCommentState({ type: "ADD", comment: value });
		console.log(commentState.newComment, commentState.commentData);
	};

	const deleteHandler = (value) => {
		dispatchCommentState({ type: "DELETE", id: value });
	};

	return (
		<CommentContext.Provider
			value={{
				Data: commentState.commentData,
				score: 0,
				resetValue: textInput,
				textAreaContent: textareaInput,
				replyComment: replyHandler,
				addComment: addHandler,
				deleteComment: deleteHandler,
			}}
		>
			{props.children}
		</CommentContext.Provider>
	);
};

export default CommentContextProvider;
