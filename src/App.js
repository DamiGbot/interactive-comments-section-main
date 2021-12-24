import React from "react";

import classes from "./App.module.scss";
import Comment from "./components/Comments/Comment";
import NewComment from "./components/Comments/CurrentUser/NewComment";
import CommentContextProvider from "./store/Comment/CommentContextProvider";
import ModalContextProvider from "./store/Modal/ModalContextProvider";

function App() {
	return (
		<CommentContextProvider>
			<ModalContextProvider>
				<div
					className={`${classes.App} bg-neutral-veryLightGray px-[16px] py-[32px] relative`}
				>
					<Comment />
					<NewComment />
				</div>
			</ModalContextProvider>
		</CommentContextProvider>
	);
}

export default App;
