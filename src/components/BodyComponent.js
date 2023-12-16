//import jsonData from "../utill/mockData";
import Restocomponent from "./RestoComponent";
import { useEffect, useState } from "react";

// Body component

const BodyComponent = () => {
    let  [testResto, updatedtestResto ] = useState([ ]);
    useEffect( () => {
      getSwiggydata(); // call back function  
    }, [] );
    const getSwiggydata = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6941362&lng=77.59919210000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
         const jsonData = await data.json();
         const liverestoData =jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
         updatedtestResto( liverestoData);

    };
return (
        <div className="body">
            <div className="search-retro">
            <input placeholder = "search Resto here" type = "search" names = "" id = ""></input>
            <button 
            onClick={() => {
                //console.log(testResto);
                filterResto = testResto.filter(
                   (resto) => resto.info.avgRating > 4 
                    ) ;
                    console.log(filterResto);
                    updatedtestResto(filterResto);
            }} 
             name = "Rating 4+ " className="btn btn-success"> Rating 4+ </button>
             </div>
       <div className="resto-container">
        {/* /* <Restocomponent prpsData = {jsonData[0]}/>
        <Restocomponent prpsData = {jsonData[1]}/>
        <Restocomponent prpsData = {jsonData[2]}/>
        <Restocomponent prpsData = {jsonData[3]}/> */ }
        {
            testResto.map(rest => <Restocomponent resData = {rest}/>)  // here rest is an object can be anything, resData is reference.
        }
        
       </div>
        </div>
    )
    };
export default BodyComponent;
