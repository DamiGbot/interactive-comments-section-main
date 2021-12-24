import React, { useState } from "react";

const Scores = (props) => {
	const [score, setScore] = useState(props.score);

	const addScoreHandler = () => {
		setScore(score + 1);
	};

	const subScoreHandler = () => {
		if (score < 1) {
			return;
		}
		setScore(score - 1);
	};

	return (
		<div className="inline-block">
			<div
				className={`rounded-[10px] py-8px px-[12px] bg-neutral-veryLightGray flex gap-16px items-center`}
			>
				<button
					className={`cursor-pointer self-stretch`}
					onClick={addScoreHandler}
				>
					<img
						alt=""
						src={require("../../assets/images/icon-plus.svg").default}
						className="w-[15px]"
					/>
				</button>
				<span className={`font-bold text-primary-moderateBlue`}>{score}</span>
				<button
					className={`cursor-pointer self-stretch`}
					onClick={subScoreHandler}
				>
					<img
						alt=""
						src={require("../../assets/images/icon-minus.svg").default}
						className="w-[15px]"
					/>
				</button>
			</div>
		</div>
	);
};

export default Scores;
