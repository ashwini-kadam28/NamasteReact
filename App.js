import React from "react";
import ReactDOM from "react-dom";
// const heading = React.createElement("div",{id:"parent"},[ 
//     React.createElement("div",{id:"Child"},[
//         React.createElement("h1",{id:"heading1"},"I am in h1 tag"),
//         React.createElement("h2",{id:"heading2"},"I am in h1 tag")
//     ]),
//     React.createElement("div",{id:"Child"},[
//         React.createElement("h1",{id:"heading3"},"I am in h1 tag"),
//         React.createElement("h2",{id:"heading4"},"I am in h1 tag")
//     ])
// ]);

//React Element
const heading = <h1>Namaste React with JSX</h1>


//JSX => React.createElement => ReactElement.(JSObject) => HtmlElement(render)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);