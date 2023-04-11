// nested html structure
import React from "react";
import ReactDOM from "react-dom/client";

// React Elements

const Title = () => (
  <h1 className="head" tabIndex={5}>
    Title using FC 🚀
  </h1>
);

const elem = <span>React Element</span>;

// React Functional Component
const HeadingComponent = () => {
  return (
    <>
      <div id="container">
        <h1>Namaste React FC 🚀🚀</h1>
        {<Title />}
        {title}
      </div>
      <div id="container2">
        <h1>Namaste React FC 🚀🚀</h1>
        {<Title />}
        {title}
      </div>
    </>
  );
};

const title = (
  <h1 className="head" tabIndex={5}>
    {elem} title using JSX 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);