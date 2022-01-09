import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import { ReplyContext } from "../../store/Reply/reply-context";
import data from "../../dev-data/data/data.json";

import { commentActions } from "../../store/commentSlice";

import classes from "../../Sass/components/Form/InputComment.module.scss";
import Button from "../UI/Button";

const { addComment, addReplies, setVariables } = commentActions;

const InputComment = (props) => {
	const [textInput, setTextInput] = useState("");
	const [rowValue, setRowValue] = useState(1);

	const dispatch = useDispatch();
	const isReplying = useSelector((state) => state.comment.isReplying);
	const replyCtx = useContext(ReplyContext);

	const { replyId, replyTo } = replyCtx;

	const textInputIsValid = textInput.trim() !== "";

	let formValid = false;

	if (textInputIsValid) {
		formValid = true;
	}

	const textChangeHandler = (event) => {
		setTextInput(event.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (isReplying) {
			dispatch(
				addReplies({ id: replyId, replyingTo: replyTo, content: textInput })
			);
		} else {
			dispatch(addComment({ content: textInput }));
			window.scrollTo(0, document.getElementById("root").scrollHeight);
		}

		setTextInput("");
		dispatch(setVariables({ id: null, isReplying: null }));
	};

	const focusHandler = () => {
		setRowValue(4);
	};

	const blurHandler = () => {
		setRowValue(1);
	};

	return (
		<Card className={classes["input-comment"]}>
			<form onSubmit={submitHandler}>
				<textarea
					placeholder="Add a comment..."
					className={classes.input}
					rows={rowValue}
					value={textInput}
					onChange={textChangeHandler}
					onFocus={focusHandler}
					onBlur={blurHandler}
				></textarea>

				<div>
					<img
						src={require(`../../dev-data/data${data.currentUser.image.png}`)}
						alt="Current user"
					/>
					<Button disabled={!formValid} type="button">
						SEND
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default InputComment;
