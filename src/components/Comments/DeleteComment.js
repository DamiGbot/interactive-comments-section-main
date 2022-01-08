import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/Button";
import { ModalContext } from "../../store/Modal/ModalContext";

import { commentActions } from "../../store/commentSlice";

import classes from "../../Sass/components/Comment/DeleteComment.module.scss";

const { removeComment } = commentActions;

// MOBILE COMPONENT
const DeleteComment = () => {
	const dispatch = useDispatch();
	const id = useSelector((state) => state.comment.id);
	const isReplying = useSelector((state) => state.comment.isReplying);
	const modalCtx = useContext(ModalContext);

	const { closeModal } = modalCtx;

	const deleteHandler = () => {
		if (isReplying) {
			console.log("not");
			return;
		}

		setTimeout(() => {
			dispatch(removeComment({ id }));
		}, 50);

		closeModal();
	};

	return (
		<div className={classes["delete-comment"]}>
			<h3>Delete comment</h3>

			<p>
				Are you sure you want to delete this comment? This will remove the
				comment and can't be undone.
			</p>

			<div>
				<Button className={classes.cancel} onClick={closeModal}>
					NO, CANCEL
				</Button>
				<Button className={classes.delete} onClick={deleteHandler}>
					YES, DELETE
				</Button>
			</div>
		</div>
	);
};

export default DeleteComment;
