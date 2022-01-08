import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { ModalContext } from "../../store/Modal/ModalContext";
import Card from "./Card";

import classes from "../../Sass/components/UI/Modal.module.scss";

const Backdrop = () => {
	const modalCtx = useContext(ModalContext);

	const { closeModal } = modalCtx;

	return <div className={classes.backdrop} onClick={closeModal}></div>;
};

const ModalContent = (props) => {
	return <Card className={classes.modal}>{props.children}</Card>;
};

const portalDist = document.getElementById("overlay-root");

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalDist)}
			{ReactDOM.createPortal(
				<ModalContent>{props.children}</ModalContent>,
				portalDist
			)}
		</>
	);
};

export default Modal;
