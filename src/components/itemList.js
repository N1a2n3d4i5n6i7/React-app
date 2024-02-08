
import { useDispatch } from "react-redux";
import { addItem } from "../utill/cartSlice";
import { ITEM_URL } from "../utill/constitants";


const ItemList = ( {items}) =>{
  // console.log(items);
  const dispatch = useDispatch();
  const newaddItem = (item) => {
    dispatch(addItem(item))
  }
    return (
        <ul className="menuitems">
        {
          items.map(item => 
            <li className="itemslist">
                { item?.card?.info.name} - $ ({item?.card?.info?.price/100})
                <span> <img src = {ITEM_URL + item.card.info.imageId}/> </span>
                <button className="btn btn-primary" onClick={()=> newaddItem(item)}> Add </button>
                 <hr></hr>
                 </li>


           )
        }
        </ul>
    );
}
export default ItemList;