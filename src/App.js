import React from "react";

import InputComment from "./components/Form/InputComment";
import ModalContextProvider from "./store/Modal/ModalContextProvider";

import classes from "./Sass/pages/App.module.scss";
import ReplyContextProvider from "./store/Reply/ReplyContextProvider";
import CommentStructure from "./components/Comments/CommentStructure";

function App() {
	return (
		<ReplyContextProvider>
			<ModalContextProvider>
				<div className={classes.App}>
					<CommentStructure />
					<InputComment />
				</div>
			</ModalContextProvider>
		</ReplyContextProvider>
	);
}

export default App;
