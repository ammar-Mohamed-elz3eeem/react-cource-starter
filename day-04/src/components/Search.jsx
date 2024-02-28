import React from "react";
import Quiz from "../assets/quiz.png";

export default class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			stage: 0,
			username: "",
			questions: [
				"what is your favourite color ?",
				"what is your favourite programming language ?",
			],
			answers: [],
			thanksMessage: "",
		};
	}

	nextQuestion() {
		this.setState({
			stage: this.state.stage + 1,
		});
	}

	finishQuestions() {
		this.setState({
			thanksMessage: "Thanks for finishing this great exam with us :)",
		});
	}

	render() {
		return (
			<div className="flex flex-row items-center justify-content-center border-2">
				<div className="w-25">
					<img src={Quiz} width="100%" />
				</div>
				<div className="w-25 h-full">
					{!this.state.thanksMessage ? (
						<form className="form">
							<div className="flex flex-column">
								<p>{this.state.questions[this.state.stage]}</p>
								<input
									className="form-control"
									type="text"
									placeholder="Enter your answer"
								/>
								{this.state.stage < this.state.questions.length - 1 ? (
									<button type="button" onClick={this.nextQuestion.bind(this)}>
										Next
									</button>
								) : (
									<button
										type="button"
										onClick={this.finishQuestions.bind(this)}
									>
										Send
									</button>
								)}
							</div>
						</form>
					) : (
						<div>{this.state.thanksMessage}</div>
					)}
				</div>
			</div>
		);
	}
}
