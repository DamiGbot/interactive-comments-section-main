import React, { useEffect, useState } from "react";

import classes from "../../Sass/components/Comment/UsersInfo.module.scss";

const checkTime = (time, value) => {
	time = Math.round(time);
	return time < 2 ? `${time} ${value} ago` : `${time} ${value}s ago`;
};

const timeDifference = (current, previous) => {
	let msPerMinute = 60 * 1000;
	let msPerHour = msPerMinute * 60;
	let msPerDay = msPerHour * 24;
	let msPerMonth = msPerDay * 30;
	let msPerYear = msPerDay * 365;

	let elapsed = current - previous;

	if (elapsed < msPerMinute) {
		if (Math.round(elapsed / 1000) === 0) {
			return "now";
		}
		return checkTime(elapsed / 1000, "second");
	} else if (elapsed < msPerHour) {
		return checkTime(elapsed / msPerMinute, "minute");
	} else if (elapsed < msPerDay) {
		return checkTime(elapsed / msPerHour, "hour");
	} else if (elapsed < msPerMonth) {
		return checkTime(elapsed / msPerDay, "day");
	} else if (elapsed < msPerYear) {
		return checkTime(elapsed / msPerMonth, "month");
	} else {
		return checkTime(elapsed / msPerYear, "year");
	}
};

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
