import React, { useContext } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import Actions from "./Actions";
import CommentBody from "./CommentBody";
import UsersInfo from "./UsersInfo";

import { ModalContext } from "../../store/Modal/ModalContext";

import classes from "../../Sass/components/Comment/Comment.module.scss";
import Modal from "../UI/Modal";
import DeleteComment from "./DeleteComment";

const Comment = () => {
	const modalCtx = useContext(ModalContext);
	const commentData = useSelector((state) => state.comment.comments);

	const { modalOpened } = modalCtx;

	const comments = commentData.comments.map((item) => (
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

	return (
		<>
			{modalOpened && (
				<Modal>
					<DeleteComment />
				</Modal>
			)}
			{comments}
		</>
	);
};

export default Comment;
