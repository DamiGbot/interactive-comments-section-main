import React from "react";

import classes from "../../Sass/components/Comment/UsersInfo.module.scss";

const UsersInfo = (props) => {
	const isCurrentUser = props.user.username === props.item.user.username;

	return (
		<div className={classes.userInfo}>
			<img
				alt="users avatar"
				src={require(`../../dev-data/data${props.item.user.image.png}`)}
			/>

			<p className={classes.username}>{props.item.user.username}</p>

			{isCurrentUser && <p className={classes.currentUser}>you</p>}

			<p className={classes.timestamp}>{props.item.createdAt}</p>
		</div>
	);
};

export default UsersInfo;
