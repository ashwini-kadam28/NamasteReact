import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`

const WithPromoted =(RestaurantCard)=>{ 
   return(props)=>{
    return(
        <>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
        </>
    )
   }


}

export default WithPromoted;