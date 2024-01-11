// //import jsonData from "../utill/mockData";
 import Restocomponent from "./RestoComponent";
 import Onlinefooddel from "./Onlinefooddel";
 import WhatsonMind from "./WhatsonMind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



// // Body component

 const BodyComponent = () => {

    // //What's on your mind
    const [whatsonyourmindData,SetyoumindData] = useState ([]);
    
    //Top Restaurants Data
    const  [Restodata,SettopResto] = useState([ ]);

     //Resto Online food Delivery
     const [onlinefoodDel,SetonlinefoodDel] = useState ([]);

    useEffect( () => {
      getSwiggydata();   
    }, [] );

    const getSwiggydata = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');     
        jsondata = await data.json();
         const whatsonmindjson = jsondata.data.cards[0].card.card.gridElements.infoWithStyle.info;
        const allrestdatajson = jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        const onlinedeljson = jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
         SetyoumindData(whatsonmindjson);
        SettopResto(allrestdatajson);
        SetonlinefoodDel(onlinedeljson);
       
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

           {/* Whats on your Mind */}
            <h3 className="mind-heading">What's On Your Mind</h3>

           <div className="mind-section">
   
            {
               whatsonyourmindData.map (foodsel => <WhatsonMind newFood = {foodsel}/>)
             }      
    
            </div>     

   {/* Top restaurant chains in Anantapur          */}
             
              <h3 className="topresheading"> Top restaurant chains in Anantapur</h3>
               <div className="resto-container">
                
                {
                    Restodata.map(rest =>
                      //to get the dynamic id in the url
                     <Link to={"/restaurantmenu/" + rest.info.id}>  
                    < Restocomponent resData = {rest}/>
                    </Link>
                    )
                }
                
            </div>  

            {/* Restaurant with online food delivery in Anantapur */}

             <h3 className="onlinedel-heading">Restaurants with online food delivery in Anantapur </h3>
            <div className="resto-container">
                
                {
                    onlinefoodDel.map(onlinedel => <Onlinefooddel onlinedelData = {onlinedel }/>)
                }
                
            </div> 
            </div>
           )
           };
      export default BodyComponent;



