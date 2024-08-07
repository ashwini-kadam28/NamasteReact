import { useState, useEffect } from 'react';
import ResturantCards from './ResturantCards';
import { Link } from 'react-router-dom';


const Bodycontainer = () => {
    const [resData, setResData] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        console.log("data:------------> ", jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setResData(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            {console.log("resData", resData)}
            <>
                <div className="search-container">

                </div>
                <div className="filter-container">

                </div>
            </>
            <div className="card-container">
                {resData.map((restaurant) =>
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><ResturantCards restaurantData={restaurant} /></Link>)}

            </div>
        </>
    )
}

export default Bodycontainer;