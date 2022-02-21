import { Component } from "react";
import Page from "../component/Page";

import * as gtag from "../gtag";

export default class Contact extends Component {
	state = { message: "" };

	handleInput = (e) => {
		this.setState({ message: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		gtag.event({
			action: "submit_form",
			category: "Contact",
			label: this.state.message,
		});

		this.setState({ message: "" });
	};

	render() {
		return (
			<Page>
				<div
					className="
        relative
        z-10
        pt-[120px]
        md:pt-[130px]
        lg:pt-[160px]
        pb-[50px]
        bg-primary
        overflow-hidden
      "
				>
					<div className="container">
						<div className="flex flex-wrap items-center -mx-4">
							<div className="w-full px-4">
								<div className="text-center">
									<h1 className="font-semibold text-white text-4xl">Contact</h1>
								</div>
							</div>
						</div>
					</div>
					<div>
						<span className="absolute top-0 left-0 z-[-1]">
							<svg
								width="495"
								height="470"
								viewBox="0 0 495 470"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="55"
									cy="442"
									r="138"
									stroke="white"
									strokeOpacity="0.04"
									strokeWidth="50"
								/>
								<circle
									cx="446"
									r="39"
									stroke="white"
									strokeOpacity="0.04"
									strokeWidth="20"
								/>
								<path
									d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
									stroke="white"
									strokeOpacity="0.08"
									strokeWidth="12"
								/>
							</svg>
						</span>
						<span className="absolute top-0 right-0 z-[-1]">
							<svg
								width="493"
								height="470"
								viewBox="0 0 493 470"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="462"
									cy="5"
									r="138"
									stroke="white"
									strokeOpacity="0.04"
									strokeWidth="50"
								/>
								<circle
									cx="49"
									cy="470"
									r="39"
									stroke="white"
									strokeOpacity="0.04"
									strokeWidth="20"
								/>
								<path
									d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
									stroke="white"
									strokeOpacity="0.06"
									strokeWidth="13"
								/>
							</svg>
						</span>
					</div>
				</div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<span>Message:</span>
						<textarea onChange={this.handleInput} value={this.state.message} />
					</label>
					<button type="submit">submit</button>
				</form>
			</Page>
		);
	}
}
