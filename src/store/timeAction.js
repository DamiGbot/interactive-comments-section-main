import { commentActions } from "./commentSlice";

const { addComment } = commentActions;

export const setTime = () => {
	return (dispatch) => {
		dispatch(addComment());
	};
};
