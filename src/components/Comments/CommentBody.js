import React from "react";

import classes from "../../Sass/components/Comment/CommentBody.module.scss";

const CommentBody = (props) => {
	const { replyingTo } = props.item;

	return (
		<div className={classes.commentBody}>
			<p>
				{replyingTo && <span>@{props.item.replyingTo}</span>}{" "}
				{props.item.content}
			</p>
		</div>
	);
};

export default CommentBody;
