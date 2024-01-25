// we need to receive the catagory data from restomenu catagory and display the catagory items in this component.

import ItemList from "./itemList";
import { useState } from "react";

const Restorentcatagory = ({data}) =>{
    const [showitems,setshowitems] = useState(false);

    const showlistItems = () => {
        setshowitems(!showitems);
    }
    //console.log(data);
   
    
    return (
        <div className="catagory-menu" onClick={showlistItems} > 
       <p> {data.title} - ({data.itemCards.length}) </p>
     { showitems &&  <ItemList items= { data.itemCards }/>}
        </div>
    );
}
export default  Restorentcatagory;