const parent= React.createElement(
    "div",
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"}, 
       [ React.createElement("h1",{},"Im an child tag 1"), 
        React.createElement("h1",{},"Im an child tag 2"), 
    ]),
    React.createElement(
        "div", 
        {id: "child"}, 
       [ React.createElement("h1",{},"Im an child tag 1"), 
        React.createElement("h1",{},"Im an child tag 2"), 
    ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
