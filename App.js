// nested html structure
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading2" }, "This is Namaste React 🚀"),
    React.createElement("h2", { id: "heading3" }, "I am H2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading4" }, "I am H1 tag!"),
    React.createElement("h2", { id: "heading5" }, "I am H2 tag!"),
  ]),
]);
console.log(parent);
// nested html structure

// starting with heading
const heading = React.createElement(
  "h1",
  { id: "heading1", xyz: "abc" },
  "Hello World from React!"
);
//console.log(heading); //object
//starting with heading

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
