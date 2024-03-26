import { CDN_URL } from "../utils/constants";
// Import Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript components as needed
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating,cuisines,costForTwo,sla} = resData?.info;
    return (
        <div className = "card"  
        style = {{backgroundColor: '#f0f0f0', width: '18rem'}}
        >
        <div className = 'card-body'>
            <img className="card-image-top"
            src ={ CDN_URL + cloudinaryImageId} style = {{width: '200px', height: '246px'}}alt='Food image' />
            <h3 className = 'card-title'>{name}</h3>
            <h4 className = 'card-subtitle'>{cuisines.join(", ")}</h4>
            <h4 className ='card-text'>{avgRating}</h4>
            <h4 className ='card-text text-success'>{costForTwo}</h4>
            <h4 className ='card-text'>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;