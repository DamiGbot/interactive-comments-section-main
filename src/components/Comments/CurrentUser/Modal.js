import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

import classes from "./Modal.module.scss";
import { ModalContext } from "../../../store/Modal/ModalContext";
import { CommentContext } from "../../../store/Comment/CommentContext";

const Backdrop = (props) => {
	return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
	const modalContext = useContext(ModalContext);
	const commentContext = useContext(CommentContext);

	return (
		<Card className={`${classes.modal} mx-16px px-[28px] py-[24px]`}>
			<h2 className={`text-neutral-darkBlue font-medium text-[20px] mb-16px`}>
				Delete comment
			</h2>
			<p className={`mb-16px text-neutral-grayishBlue`}>
				Are you sure you want to delete this comment? This will remove the
				comment and can't be undone.
			</p>
			<div className={`flex items-center justify-between xr:justify-center`}>
				<Button
					className={`bg-neutral-grayishBlue px-[22px] xr:mr-[16px]`}
					onClick={modalContext.closeModal}
				>
					NO, CANCEL
				</Button>
				<Button
					className={`bg-primary-softRed px-[20px]`}
					onClick={commentContext.deleteComment.bind(null, props.id)}
				>
					YES, DELETE
				</Button>
			</div>
		</Card>
	);
};

const portalPath = document.getElementById("overlay-root");

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalPath)}
			{ReactDOM.createPortal(<ModalOverlay id={props.id} />, portalPath)}
		</>
	);
};

export default Modal;
