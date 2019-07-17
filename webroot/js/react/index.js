import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./Navbar";

let Site = () => (
    <div>
        <Navbar />
        <App />
    </div>
);

ReactDOM.render(<Site />, document.getElementById("root"));
