import React from "react";

import classes from "../../Sass/components/Comment/Actions.module.scss";

const Actions = (props) => {
	const isCurrentUser = props.user.username === props.item.user.username;

	return (
		<div className={classes.actions}>
			<div className={classes.rating}>
				<button>+</button>2<button>-</button>
			</div>

			<div className={classes.dispatch}>
				{isCurrentUser && (
					<>
						<button className={classes.delete}>
							<span>
								<img
									alt="delete icon"
									src={
										require("../../dev-data/data/images/icon-delete.svg")
											.default
									}
								/>
							</span>
							Delete
						</button>

						<button className={classes.general}>
							<span>
								<img
									alt="edit icon"
									src={
										require("../../dev-data/data/images/icon-edit.svg").default
									}
								/>
							</span>
							Edit
						</button>
					</>
				)}

				{!isCurrentUser && (
					<button className={classes.general}>
						<span>
							<img
								alt="reply icon"
								src={
									require("../../dev-data/data/images/icon-reply.svg").default
								}
							/>
						</span>
						Reply
					</button>
				)}
			</div>
		</div>
	);
};

export default Actions;
