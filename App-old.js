import React from "react";  // so here the double quotes react is taken from the node_modules.npm parcel 
import  ReactDOM  from "react-dom/client"; // same as above


//const heading = React.createElement("h1", { id:"myh1Tag"}, "Hello From ReactJs");  // any Html element and it iswithe CDN

var name = "nandini";
var a = 10;
var b = 40;

// React Element - JSX code
const heading = (
                <div id = "container">
                 <h1 id="myheading"> Hello my name is: {name}</h1>
                  <p> Count - {a+b}{console.log("hey JSX")} </p>
                 </div>);
 const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(heading); 
// Functional CPMPONENT is not a js function which return jsx code
// const Myheading = () => {
//     return ( <h1 id="myid"> hello heading</h1>)
// };
// const image =() => {
//     return ( <img src = "hhh.jpg"></img>)
// };
// const footer = () => {
//     return (
//          <div classname = "myfooter">
//         <ul>
           
//         <li><a href ="#">Home </a></li>
//         <li><a href ="#">About </a></li>
//         <li><a href ="#">contact us </a></li>
//         </ul>
//     </div>)
// };
// const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root2.render(<footer></footer>); 