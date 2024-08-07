import {Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {


    //subscribing a store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartItems", cartItems);
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" />
            </div>
            <div style={{"marginLeft": "auto"}}>
                <ul className="nav-link">
                    <li><Link to="/" >Homeq1</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button>Login</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;