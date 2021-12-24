import React, { useContext } from "react";

import Card from "../../UI/Card";
import NewCommentButton from "./NewCommentButton";

import classes from "./NewComment.module.scss";
import { CommentContext } from "../../../store/Comment/CommentContext";

const NewComment = () => {
	const commentContext = useContext(CommentContext);

	return (
		<Card className={`sticky bottom-0 left-[16px] right-[16px]`}>
			<textarea
				ref={commentContext.textAreaContent}
				className={`${classes.textarea} text-neutral-grayishBlue mb-16px`}
				placeholder="Add a comment..."
			></textarea>
			<NewCommentButton life={commentContext.textAreaContent} />
		</Card>
	);
};

export default NewComment;
