import React from "react";

export const ModalContext = React.createContext({
	modalOpened: false,
	showModal: () => {},
	closeModal: () => {},
});
