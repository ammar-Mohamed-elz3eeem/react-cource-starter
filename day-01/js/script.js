const incButton = React.createElement("button", null, "Increase");
const decButton = React.createElement("button", null, "Decrease");
const btnGroup = React.createElement("div", null, incButton, decButton);

// class Box extends React.Component {
// 	render() {
// 		return React.createElement(
// 			"div",
// 			null,
// 			React.createElement("p", null, this.props["startingNumber"]),
// 			btnGroup
// 		);
// 	}
// }

function NiceBox(props) {
	return React.createElement(
		"div",
		null,
		React.createElement("p", null, props["startingNumber"]),
		btnGroup
	);
}

const boxy = React.createElement(NiceBox, {
	startingNumber: "5s4fg5sd4g",
	endNumber: "",
	step: "",
});

ReactDOM.render(boxy, document.getElementsByClassName("container")[0]);
