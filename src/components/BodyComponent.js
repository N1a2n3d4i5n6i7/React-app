// //import jsonData from "../utill/mockData";
 import Restocomponent from "./RestoComponent";
import { useEffect, useState } from "react";



// // Body component

 const BodyComponent = () => {

    
    //Top Restaurants Data
    const  [Restodata,SettopResto] = useState([ ]);
    useEffect( () => {
      getSwiggydata();   
    }, [] );

    const getSwiggydata = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');     
        jsondata = await data.json();
        const allrestdatajson = jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        SettopResto(allrestdatajson);
       
         };

        return (
         <div className="body">
            <div className="search-retro">
            <input type = "search" names = "" id = ""></input>
            <button 
           onClick={() => {
                
                filterResto =  Restodata.filter(
                   (resto) => resto.info.avgRating > 4 
                    ) ;
                     console.log(filterResto);
                    updatedtestResto(filterResto);
            }} 
             name = "Rating 4+ " className="btn btn-success"> Rating 4+ </button>
             </div>



   {/* Top restaurant chains in Anantapur          */}
             
  <h3 className="topresheading"> Top restaurant chains in Anantapur</h3>
       
  <div className="resto-container">
                
                {
                    Restodata.map(rest => < Restocomponent resData = {rest}/>)
                }
                
            </div>    

           </div>
           )
           };
      export default BodyComponent;



