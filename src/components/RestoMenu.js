import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Restorentcatagory from "./restorentcatagory";

 const RestoMenu = () => {
 const [resmenuInfo, setresmenuInfo] = useState(null);
 const { resId } = useParams();
 console.log(resId);
    useEffect( () => {
           fetchMenu();
     }, []);
    
       const fetchMenu = async() => {
         try {
          const menurespo = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.6818877&lng=77.6005911&restaurantId="+resId);
       //  const jsonData = await menurespo.json();
      
      // console.log(menurespo);
      setresmenuInfo(menurespo.data);
     } catch { }
      // const itemsCards2 = menurespo.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    //   const { name, city, areaName, cuisines } = resmenuInfo?.data?.cards[0]?.card?.card?.info;
      //console.log(itemscards);
     };

      //DeStructering the Data
        //if( resmenuInfo === null) { return <Shimmer/>}

       // const { name, cuisines } = resmenuInfo?.data?.cards[0]?.card?.card?.info;
    // const   itemCards  = resmenuInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
     const catagories  = resmenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     // console.log(catagories);

     return (
        <div className="about-us">
                 {/* <h1>{ name }</h1> 
             <p> { cuisines.join(",") }</p>    */}
            {/* <p> { catagories[0]?.card?.card?.title }</p>  */}
            
               { catagories?.map( (catagorie) => (        // catagories && catagories.map also works
                // We will pass Each Catagorie to the component
             // console.log(catagorie);
                <Restorentcatagory data = { catagorie?.card?.card}   />
              ))
              }
          </div>
     );
  }

  export default RestoMenu;