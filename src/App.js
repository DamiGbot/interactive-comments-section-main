import React from "react";

import Comment from "./components/Comments/Comment";

import classes from "./Sass/pages/App.module.scss";

function App() {
	return (
		<div className={classes.App}>
			<Comment />
		</div>
	);
}

export default App;
