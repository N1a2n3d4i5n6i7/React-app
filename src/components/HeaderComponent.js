// Header Cmponent
const Myheader = () => {
    return (
       <div className="site-header">
        <nav className="navbar navbar-expand ">
            <div className="global-nav">
             <div className="navbar-left">
             <a href="#" ><img className="header-logo" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" ></img></a>  
             <div className="location">
                            <select className="location-select">
                                <option>Select Your Location</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                                <option>Anantapur</option>
                            </select>
                        </div>   
             </div>
             <div className="navbar-right">
             <ul className="navbar-nav">
                <li className="nav-item"> <input className="search-input" type = "search" placeholder="search"/> </li>
                <li className="nav-item"><a className="nav-link" href="#"> Offers </a></li>
                <li className="nav-item"><a className="nav-link" href="#"> Help </a></li>
                <li className="nav-item"><a className="nav-link" href="#"> Sign In </a></li>
                <li className="nav-item"><a className="nav-link" href="#"> cart </a></li>
            </ul>
            </div>
            </div>
            </nav>
       </div>
    
    )

};

export default Myheader;