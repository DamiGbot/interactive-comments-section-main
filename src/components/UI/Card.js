import React from "react";

import classes from "../../Sass/components/UI/Card.module.scss";

const Card = (props) => {
	const style = `${classes.card} ${props.className}`;

	return <div className={style}>{props.children}</div>;
};

export default Card;
