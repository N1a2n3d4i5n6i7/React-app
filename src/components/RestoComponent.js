
// Restaurent component
const Restocomponent = (props) => {
    console.log(props);
    return (
      <div className="scroll-menu">
    <div className="card">
         <div className="card-body">
         <img className="card-image" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +props.resData.info.cloudinaryImageId }/>
    
      <h5 className="card-title">{props.resData.info.name}</h5>
    <p className="card-text">Rating: { props.resData.info.avgRatingString
}</p>
     
      <p className="card-text">{ props.resData.info.areaName}</p>
      <p className="card-text">{props.resData.info.sla.deliveryTime}Mins</p>
        {/* <a href="#" className="btn btn-primary">Check Menu</a>   */}
    </div>
  </div>
  </div>
    )
}
export default Restocomponent;