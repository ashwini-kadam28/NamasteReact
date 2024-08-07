import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu =()=>{ 
    const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
    const [resInfo, setResInfo] = useState(null);
    const [itemCards, setItemCards] = useState(null);

    const disptch = useDispatch();

    const handleOnClick = (name) =>{        
        disptch(addItem(name));
    }
    useEffect(()=>{
        fetchMenu();
    },[]);

   const fetchMenu = async ()=>{
   
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    const json =await data.json();
    setResInfo(json.data.cards[2].card.card.info);
    setItemCards(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
   // console.log("data", json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[0].card.info.name)
   }

  

   if(resInfo !== null && itemCards!== null && itemCards!== undefined  ){
    const {name, avgRating, costForTwoMessage} = resInfo;
    return(
        <div >{(console.log("itemCards",itemCards))}
            <h1>{name}</h1>
            <h2>Rating:{avgRating}</h2>
            <h3> {costForTwoMessage}</h3>
            <h2> Menu</h2>
            <ul>
            {itemCards.map((menu)=> <li>{menu.card.info.name} : {menu.card.info.price/100} <button onClick={()=>handleOnClick(menu.card.info.name)}>Add +</button></li> )}
            </ul>
        </div>
    )
}
}

export default RestaurantMenu;