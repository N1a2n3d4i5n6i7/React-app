import React from "react";
import  ReactDOM  from "react-dom/client";
import Myheader from "./components/HeaderComponent";
import Myfooter from "./components/FooterComponent";
import Bodycomponent from "./components/BodyComponent";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Offers from "./components/OffersComponent";
import Help from "./components/HelpComponent";
import Error from "./components/Error Component";
import RestoMenu from "./components/RestoMenu";



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
            <Myheader></Myheader>
           <Outlet/>
            <Myfooter></Myfooter>
        </div>
    )
};
// Mnual way of showing
// const Appcomponent2 = ()=>{
//     return (
//         <div className="App">
//             <Myheader></Myheader>
//            <Offers/>
//             <Myfooter></Myfooter>
//         </div>
//     )
// };

// // App Routing Configuaration
// const appRouter = createBrowserRouter([
//     {
//         path : "/",
//         element : <Appcomponent/>,
//         errorElement : <Error/>
//     },
//     {
//         path : "/Offers",
//         element : <Offers/>
//         // element : <Appcomponent2/>
//     },
//     {
//         path : "/Help",
//         element : <Help/>
//     }
// ]);

const appRouter = createBrowserRouter ([
    {
        path : "/",
        element : <Appcomponent/>,
        children : [
            {
                path : "/",
                element : <Bodycomponent/>
            },
            
            
            {
                path : "/Offers",
                element : <Offers/>
            },
            { 
                path :  "/Help",
                element : <Help/>
            },
            {
                path : "/restaurantmenu/:resId",
                element : <RestoMenu/>
            }

        ],

        errorElement : <Error/>
    }
])

const root2 = ReactDOM.createRoot(document.getElementById("root"));

//root2.render(<Appcomponent></Appcomponent>); 

root2.render(<RouterProvider router={appRouter}/>);