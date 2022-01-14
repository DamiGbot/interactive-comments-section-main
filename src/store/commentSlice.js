import { createSlice } from "@reduxjs/toolkit";

import data from "../dev-data/data/data.json";

const initialState = { comments: data, id: null, isReplying: null };

const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {
		setVariables(state, action) {
			state.id = action.payload.id;
			state.isReplying = action.payload.isReplying;
		},

		addComment(state, action) {
			state.comments.comments.push({
				id: Math.random(),
				content: action.payload.content,
				createdAt: Date.now().valueOf(),
				score: 0,
				user: state.comments.currentUser,
				replies: [],
			});
		},

		removeComment(state, action) {
			const id = action.payload.id;
			state.comments.comments = state.comments.comments.filter(
				(item) => item.id !== id
			);
		},

		addReplies(state, action) {
			const id = action.payload.id;
			const replyingTo = action.payload.replyingTo;

			let commentArray = state.comments.comments.find((item) => item.id === id);
			let username = commentArray ? commentArray.user.username : null;

			if (!commentArray) {
				commentArray = state.comments.comments.filter(
					(item) => item.replies.find((el) => el.id === id) !== undefined
				);
				commentArray = commentArray[0];

				username = replyingTo;
			}

			commentArray.replies.push({
				id: Math.random(),
				content: action.payload.content,
				createdAt: Date.now(),
				score: 0,
				replyingTo: username,
				user: state.comments.currentUser,
				replies: [],
			});
		},

		removeReplies(state, action) {
			const id = action.payload.id;

			state.comments.comments.forEach(
				(item) => (item.replies = item.replies.filter((el) => el.id !== id))
			);
		},

		editComment() {},
	},
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
