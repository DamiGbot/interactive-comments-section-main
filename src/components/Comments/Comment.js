import React, { useContext } from "react";

import Card from "../UI/Card";
import User from "./User";
import Content from "./Content";
import Scores from "./Scores";
import ReplyButton from "./OtherUsers/ReplyButton";
import CurrentUser from "./CurrentUser/CurrentUser";
import CurrentUserDeleteButton from "./CurrentUser/CurrentUserDeleteButton";

import { data } from "../../assets/data";
import CurrentUserEditButton from "./CurrentUser/CurrentUserEditButton";
import { CommentContext } from "../../store/Comment/CommentContext";

const Comment = (props) => {
	const commentContext = useContext(CommentContext);

	const comments = commentContext.Data.comments.map((comment) => (
		<React.Fragment key={Math.random().toString()}>
			{/* <Card className={`mb-16px`} key={comment.id}>
				<User
					image={require(`../../assets${comment.user.image.png}`)}
					username={comment.user.username}
					createdAt={comment.createdAt}
				/>
				<Content content={comment.content} />

				<Scores score={comment.score} />

				<ReplyButton />
			</Card> */}

			{data.currentUser.username === comment.user.username ? (
				<Card className={`mb-16px`} key={comment.id}>
					<CurrentUser
						image={require(`../../assets${comment.user.image.png}`)}
						username={comment.user.username}
						createdAt={comment.createdAt}
					/>
					<Content replyingTo={comment.replyingTo} content={comment.content} />

					<Scores score={comment.score} />

					<CurrentUserEditButton />
					<CurrentUserDeleteButton id={comment.id} />
				</Card>
			) : (
				<Card className={`mb-16px`} key={comment.id}>
					<User
						image={require(`../../assets${comment.user.image.png}`)}
						username={comment.user.username}
						createdAt={comment.createdAt}
					/>

					<Content replyingTo={comment.replyingTo} content={comment.content} />

					<Scores score={comment.score} />

					<ReplyButton />
				</Card>
			)}

			<div className="border-l-4 border-neutral-lightGray">
				{comment.replies.map((reply) =>
					data.currentUser.username === reply.user.username ? (
						<Card className={`mb-16px ml-16px`} key={reply.id}>
							<CurrentUser
								image={require(`../../assets${reply.user.image.png}`)}
								username={reply.user.username}
								createdAt={reply.createdAt}
							/>
							<Content replyingTo={reply.replyingTo} content={reply.content} />

							<Scores score={reply.score} />

							<CurrentUserEditButton />
							<CurrentUserDeleteButton />
						</Card>
					) : (
						<Card className={`mb-16px ml-16px`} key={reply.id}>
							<User
								image={require(`../../assets${reply.user.image.png}`)}
								username={reply.user.username}
								createdAt={reply.createdAt}
							/>

							<Content replyingTo={reply.replyingTo} content={reply.content} />

							<Scores score={reply.score} />

							<ReplyButton />
						</Card>
					)
				)}
			</div>
		</React.Fragment>
	));

	return <>{comments}</>;
};

export default Comment;
