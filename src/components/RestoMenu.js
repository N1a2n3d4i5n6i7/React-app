import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Restorentcatagory from "./restorentcatagory";


const RestoMenu = () => {
    const [restomenuInfo,setresmenuInfo] = useState(null);
    const {resId} = useParams();

   // console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
    const RestomenuData =  await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.6818877&lng=77.6005911&restaurantId="+resId);
    //const jsonData =  await menurespo.json();
    setresmenuInfo(RestomenuData.data);
    const itemcardslist = RestomenuData.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    console.log(itemcardslist);
 }
 return (
  <div className="restomenubar">
      <h2 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.name}</h2>
      <h2 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.locality}</h2>
      <h3 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.aggregatedDiscountInfo.header}</h3>
      <h3 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.sla.deliveryTime} mins</h3>

     <Restorentcatagory/>
        

  </div>
  
)
 
};

export default RestoMenu;

