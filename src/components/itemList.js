
import { ITEM_URL } from "../utill/constitants";
const ItemList = ( {items}) => {
  // console.log(items);
    return (
        <ul className="list-group">
        {
          items.map( item => 
            <li className="list-item">
                { item?.card?.info?.name} - $ ({item.card.info.price/100})
                <span> <img src = {ITEM_URL + item.card.info.imageId}/> </span>
                <button className="btn btn-primary"> Add </button>
                 </li>

           )
        }
        </ul>
    );
}
export default ItemList;