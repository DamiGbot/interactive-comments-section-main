import React from "react";

import classes from "../../Sass/components/UI/Button.module.scss";

const Button = (props) => {
	const style = `${classes.button} ${props.className}`;

	return (
		<button className={style} onClick={props.onClick} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
