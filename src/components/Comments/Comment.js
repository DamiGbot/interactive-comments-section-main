import React from "react";

import Card from "../UI/Card";
import Actions from "./Actions";
import CommentBody from "./CommentBody";
import UsersInfo from "./UsersInfo";
import commentData from "../../dev-data/data/data.json";

import classes from "../../Sass/components/Comment/Comment.module.scss";

const Comment = () => {
	const commentContext = commentData.comments.map((item) => (
		<div key={item.id}>
			<Card className={classes.comment}>
				<UsersInfo item={item} user={commentData.currentUser} />
				<CommentBody item={item} />
				<Actions item={item} user={commentData.currentUser} />
			</Card>

			<div className={classes.replies}>
				{item.replies.map((item) => (
					<Card key={item.id} className={classes.comment}>
						<UsersInfo item={item} user={commentData.currentUser} />
						<CommentBody item={item} />
						<Actions item={item} user={commentData.currentUser} />
					</Card>
				))}
			</div>
		</div>
	));

	return <>{commentContext}</>;
};

export default Comment;
