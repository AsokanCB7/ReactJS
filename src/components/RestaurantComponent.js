import { RES_URL } from "../utils/config";

const RestaurantComponent =({ResData})=>{
    const {name,cuisines,avgRatingString}=ResData;
    return(
            <div className="res-container">
                <div className="res-card">
                    <img className="res-img" src={RES_URL+ResData.cloudinaryImageId}/>
                    <h3>{name}</h3>
                    <h5>{cuisines.join(',')}</h5>
                    <h6>{avgRatingString} rating </h6>
                    <h6>{ResData.sla.deliveryTime} minutes</h6>
                </div>
            </div>
    );
}
export default RestaurantComponent;