import React, { useContext } from "react";
import { ModalContext } from "../../../store/Modal/ModalContext";

import FunctionButton from "../../UI/FunctionButton";
import Modal from "./Modal";

const CurrentUserDeleteButton = (props) => {
	const modalContext = useContext(ModalContext);

	return (
		<>
			<FunctionButton
				svg={require("../../../assets/images/icon-delete.svg").default}
				text="Delete"
				textColor="text-primary-softRed"
				onClick={modalContext.showModal}
			/>
			{modalContext.modalOpened && <Modal id={props.id} />}
		</>
	);
};

export default CurrentUserDeleteButton;
