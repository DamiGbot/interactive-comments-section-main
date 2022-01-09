import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { ModalContext } from "../../store/Modal/ModalContext";
import { ReplyContext } from "../../store/Reply/reply-context";

import { commentActions } from "../../store/commentSlice";
import classes from "../../Sass/components/Comment/Actions.module.scss";

const Actions = (props) => {
	const dispatch = useDispatch();
	const modalCtx = useContext(ModalContext);
	const replyCtx = useContext(ReplyContext);

	const { showModal } = modalCtx;
	const { getRepliesVariables } = replyCtx;
	const { setVariables } = commentActions;

	const isCurrentUser = props.user.username === props.item.user.username;

	const setVariableHandler = (value) => {
		dispatch(setVariables({ id: props.item.id, isReplying: value }));
	};

	const deleteHandler = () => {
		showModal();

		setVariableHandler(props.item.replyingTo);
	};

	const replyHandler = () => {
		setVariableHandler(true);

		getRepliesVariables(props.item.id, props.item.user.username);
	};

	return (
		<div className={classes.actions}>
			<div className={classes.rating}>
				<button>+</button>2<button>-</button>
			</div>

			<div className={classes.dispatch}>
				{isCurrentUser && (
					<>
						<button className={classes.delete} onClick={deleteHandler}>
							<span>
								<img
									alt="delete icon"
									src={
										require("../../dev-data/data/images/icon-delete.svg")
											.default
									}
								/>
							</span>
							Delete
						</button>

						<button className={classes.general}>
							<span>
								<img
									alt="edit icon"
									src={
										require("../../dev-data/data/images/icon-edit.svg").default
									}
								/>
							</span>
							Edit
						</button>
					</>
				)}

				{!isCurrentUser && (
					<button className={classes.general} onClick={replyHandler}>
						<span>
							<img
								alt="reply icon"
								src={
									require("../../dev-data/data/images/icon-reply.svg").default
								}
							/>
						</span>
						Reply
					</button>
				)}
			</div>
		</div>
	);
};

export default Actions;
