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
				createdAt: Date.now(),
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

			state.id = null;
			state.isReplying = null;
		},

		// TODO // STOPPED HERE
		addReplies(state, action) {
			const id = action.payload.id;
			const item = state.comments.comments.find((el) => el.id === id);

			if (!item) {
				item.replies();
				return;
			}

			item.replies.push({
				id: Math.random(),
				content: action.payload.content,
				createdAt: Date.now(),
				score: 0,
				user: state.comments.currentUser,
				replies: [],
			});
		},

		removeReplies(state, action) {},

		editComment() {},
	},
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
