const heading = React.createElement("div",{id:"parent"},[ 
    React.createElement("div",{id:"Child"},[
        React.createElement("h1",{id:"heading1"},"I am in h1 tag"),
        React.createElement("h2",{id:"heading2"},"I am in h1 tag")
    ]),
    React.createElement("div",{id:"Child"},[
        React.createElement("h1",{id:"heading3"},"I am in h1 tag"),
        React.createElement("h2",{id:"heading4"},"I am in h1 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);