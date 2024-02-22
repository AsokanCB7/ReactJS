import { RES_URL } from "../utils/config";

const RestaurantComponent =({ResData})=>{
    const {name,cuisines,avgRatingString}=ResData;
    return(
            
                <div  className="w-[200px] h-[400px] p-4 m-4 bg-gray-50 hover:bg-gray-200">
                    <img className="rounded-lg" src={RES_URL+ResData.cloudinaryImageId}/>
                    <h3 className="py-2 font-bold">{name}</h3>
                    <h5 className="text-balance py-1">{cuisines.join(', ')}</h5>
                    <h6 className="py-1 font-light">{avgRatingString} rating </h6>
                    <h6 className="py-1 font-extralight">{ResData.sla.deliveryTime} minutes</h6>
                </div>
            
    );
}
export default RestaurantComponent;