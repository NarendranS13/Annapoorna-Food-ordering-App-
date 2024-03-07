import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating,cuisines,costForTwo,deliveryTime} = resData?.data;
    return (
        <div className = "res-card" style = {{
            backgroundColor: '#f0f0f0'
        }}>
            <img className="res-logo"
            src ={ CDN_URL + cloudinaryImageId} style = {{width: '200px', height: '236px'}}alt='Food image' />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;