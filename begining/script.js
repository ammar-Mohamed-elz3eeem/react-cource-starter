const paragraph = React.createElement("p", null);
const btnGr = React.createElement("div", {
	className: "btn-group flex flex-column",
});
const box = React.createElement("div", { className: "box" }, paragraph, btnGr);
const flex = React.createElement("div", { className: "flex flex-row" }, box);
const header = React.createElement("div", { id: "header" });
const page = React.createElement("div", { id: "page" }, header, flex);

// This two are equal
// const page = React.createElement(Bahaa, { id: "page" }, flex, header);
{
	/* <Bahaa></Bahaa>; */
}

class Bahaa extends React.Component {
	render() {
		return React.createElement("div", { id: "page" }, header, flex);
	}
}

ReactDOM.render(React.createElement(Bahaa, null), document.body);
