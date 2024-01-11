const Onlinefooddel = (onlineDelivery) => {
    console.log(onlineDelivery);
    return(
       
        
        <div className="scroll-menu">      
            <div className="card">
            <div className="card-body">              
                <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + onlineDelivery.onlinedelData.info.cloudinaryImageId} alt="food"></img>
                <h5 className="card-title">{onlineDelivery.onlinedelData.info.name}</h5>
                <p className="card-text">Rating : {onlineDelivery.onlinedelData.info.avgRatingString}</p>
                <p className="card-text">{onlineDelivery.onlinedelData.info.locality}</p>
                
            </div>
            </div>
        </div>
        
    )
};
export default Onlinefooddel;