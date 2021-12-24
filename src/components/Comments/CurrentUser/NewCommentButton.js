import React, { useContext } from "react";
import { CommentContext } from "../../../store/Comment/CommentContext";

import Button from "../../UI/Button";
import CurrentUserImage from "./CurrentUserImage";

const NewCommentButton = () => {
	const commentContext = useContext(CommentContext);

	return (
		<div className={`flex items-center justify-between`}>
			<CurrentUserImage />
			<Button
				onClick={commentContext.addComment.bind(
					null,
					commentContext.textAreaContent
				)}
				// onClick={commentContext.addComment}
				className={`bg-primary-moderateBlue px-[31px] `}
			>
				SEND
			</Button>
		</div>
	);
};

export default NewCommentButton;
