import React from "react";

import Comment from "./components/Comments/Comment";
import InputComment from "./components/Form/InputComment";
import ModalContextProvider from "./store/Modal/ModalContextProvider";

import classes from "./Sass/pages/App.module.scss";

function App() {
	return (
		<ModalContextProvider>
			<div className={classes.App}>
				<Comment />
				<InputComment />
			</div>
		</ModalContextProvider>
	);
}

export default App;
