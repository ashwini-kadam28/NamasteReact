import { useEffect, useState } from "react";

const ResturantCards = (props) => {
   const {restaurantData} = props;
   console.log(restaurantData);
    return (
        <>
           
                    <div className="card" key={"card"}>
                        <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurantData.info.cloudinaryImageId} />
                        <h2>{restaurantData.info.name}</h2>
                        <h3>cuisines</h3>
                        <h4>200 for 2</h4>
                        <h4>Ratings: 4.4</h4>
                    </div>
              

        </>
    )
}

export default ResturantCards;