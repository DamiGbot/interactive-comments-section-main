import React, { useEffect, useState } from "react";

import classes from "../../Sass/components/Comment/UsersInfo.module.scss";
import { timeDifference } from "../../libs/timeDifferenceHelper";

const UsersInfo = (props) => {
	const [current, setCurrent] = useState(new Date(Date.now()));
	const { createdAt } = props.item;
	const previous = new Date(createdAt);

	useEffect(() => {
		setInterval(() => {
			setCurrent(new Date(Date.now()));
		}, 1000);
	}, []);

	const isCurrentUser = props.user.username === props.item.user.username;

	return (
		<div className={classes.userInfo}>
			<img
				alt="users avatar"
				src={require(`../../dev-data/data${props.item.user.image.png}`)}
			/>
			<p className={classes.username}>{props.item.user.username}</p>
			{isCurrentUser && <p className={classes.currentUser}>you</p>}
			<p className={classes.timestamp}>{timeDifference(current, previous)}</p>
		</div>
	);
};

export default UsersInfo;
