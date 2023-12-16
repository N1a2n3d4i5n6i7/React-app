import React from "react";
import  ReactDOM  from "react-dom/client";
import Headercomponent from "./components/HeaderComponent";
import Footercomponent from "./components/FooterComponent";
import Bodycomponent from "./components/BodyComponent";


/** Planning and listing components
 * Header
 * -Logo
 * -Navigation
 * -cart
 * Body
 * -Search Bar
 * - Restaurants container (list of all restaurents)
 * single Restaurant (images, restaurent names, rating, discounts
 * footer
 * - address
 * newsletter
 */






// App component
const Appcomponent = ()=>{
    return (
        <div className="App">
            <Headercomponent></Headercomponent>
            <Bodycomponent></Bodycomponent>
            <Footercomponent></Footercomponent>
        </div>
    )
}


const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(<Appcomponent></Appcomponent>); 