import React from "react";

import Comment from "./Comments";
import classes from "../../Sass/components/Comment/CommentStructure.module.scss";

function Layout() {
	return (
		<div className={classes.structure}>
			<Comment />
		</div>
	);
}

export default Layout;
