import React, { useState } from "react";

import { ModalContext } from "./ModalContext";

const ModalContextProvider = (props) => {
	const [modalIsOpened, setModalIsOpened] = useState(false);

	const showModalHandler = () => {
		setModalIsOpened(true);
	};

	const closeModalHandler = () => {
		setModalIsOpened(false);
	};

	return (
		<ModalContext.Provider
			value={{
				modalOpened: modalIsOpened,
				showModal: showModalHandler,
				closeModal: closeModalHandler,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
