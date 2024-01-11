import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestoMenu = () => {
    const [resmenuInfo,setresmenuInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
    const menurespo = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.6818877&lng=77.6005911&restaurantId="+resId);
    const jsonData =  await menurespo.json();
    setresmenuInfo(jsonData);
 };
 // Destructing the data
 //const { name, city, areaName, cuisines } = resmenuInfo?.data?.cards[0]?.card?.card?.info;

  return (
        <div className="menu-pg">
            <h1> { resmenuInfo?.data?.cards[0]?.card?.card?.info.name}</h1>
             <p> {resmenuInfo?.data?.cards[0]?.card?.card?.info.cuisines.join(",")}</p>
             <p> {resmenuInfo?.data?.cards[0]?.card?.card?.info.city} - {resmenuInfo?.data?.cards[0]?.card?.card?.info.areaName}</p>
            
        </div>
    );
}

export default RestoMenu;