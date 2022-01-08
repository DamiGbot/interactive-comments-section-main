import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import data from "../../dev-data/data/data.json";

import { commentActions } from "../../store/commentSlice";

import classes from "../../Sass/components/Form/InputComment.module.scss";
import Button from "../UI/Button";

const InputComment = (props) => {
	const [textInput, setTextInput] = useState("");
	const dispatch = useDispatch();
	const isReplying = useSelector((state) => state.comment.isReplying);

	const { addComment, addReplies } = commentActions;

	const textChangeHandler = (event) => {
		setTextInput(event.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (isReplying) {
			console.log("not");
			dispatch(addReplies({ content: textInput }));
			return;
		}

		dispatch(addComment({ content: textInput }));
		setTextInput("");
	};

	return (
		<Card className={classes["input-comment"]}>
			<form onSubmit={submitHandler}>
				<textarea
					placeholder="Add a comment..."
					className={classes.input}
					rows={4}
					value={textInput}
					onChange={textChangeHandler}
				></textarea>

				<div>
					<img
						src={require(`../../dev-data/data${data.currentUser.image.png}`)}
						alt="Current user"
					/>
					<Button type="button">SEND</Button>
				</div>
			</form>
		</Card>
	);
};

export default InputComment;
