import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList.js";

import { clearCart } from "../utill/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const clearmyCart = () =>{
        dispatch(clearCart());
    }
// to coonect to store we need to subscribe to cartSlice 
    const cartitems = useSelector( (store) => store.cart.items) 
    return(
        <div className="cart">
            <h2>Cart</h2>
            {cartitems.length == 0 && <h3>Oops Cart is Empty! Place Your Order..</h3>}
            <button className="btn btn-primary" onClick={clearmyCart}>Clear </button>
            <ItemList items={cartitems}/>
        </div>
    );
};
export default Cart; 