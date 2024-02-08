// Header Cmponent
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Myheader = () => {
    // Here we are subscribing to the store using selector.
 const cartItems = useSelector( (store) => store.cart.items);
   console.log(cartItems);
 return (
       <div className="site-header">
        <nav className="navbar navbar-expand ">
            <div className="global-nav">
             <div className="navbar-left">
             <Link to="/" ><img className="header-logo" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" ></img></Link>
             </div>  
             {/* <div className="location">
                            <select className="location-select">
                                <option>Select Your Location</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                                <option>Anantapur</option>
                            </select>
                        </div>    */}
             
             <div className="navbar-right">
             <ul className="navbar-nav">             
                        <li className="nav-item"><input className="search-input" type="search" placeholder="Search"/></li>
                        <li className="nav-item">
                            <Link to ="/Offers" className="nav-link"> Offers</Link>
                         </li>
                        <li className="nav-item">
                        <Link to ="/Help" className="nav-link"> Help </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Sign In</Link>
                         </li>
                        <li className="nav-item">
                        <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
                        </li>
                    </ul>
            </div>
            </div>
            </nav>
       </div>
    
    )

};

export default Myheader;