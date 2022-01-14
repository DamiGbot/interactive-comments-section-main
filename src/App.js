import React from "react";

import InputComment from "./components/Form/InputComment";
import ModalContextProvider from "./store/Modal/ModalContextProvider";

import classes from "./Sass/pages/App.module.scss";
import ReplyContextProvider from "./store/Reply/ReplyContextProvider";
import Layout from "./components/Comments/Layout";

function App() {
	return (
		<ReplyContextProvider>
			<ModalContextProvider>
				<div className={classes.App}>
					<Layout />
					<InputComment />
				</div>
			</ModalContextProvider>
		</ReplyContextProvider>
	);
}

export default App;
