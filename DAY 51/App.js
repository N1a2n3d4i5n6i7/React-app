// create a html tag from React js code [Heading]
// BY using THe React Dom - I want to create a root.
// I want to render the Element to the root.

const heading = React.createElement("h1", { id:"myh1Tag"}, "Hello From ReactJs");  // any Html element

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(heading); //render means replacing (root lo unna h1 ni replace chesthundhi)

// Development - QA(Quality Check) - PROD