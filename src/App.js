import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Bodycontainer from "./components/Bodycontainer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import{Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// //React Element
// const heading = <h1>Namaste React with JSX</h1>
// //JSX => React.createElement => ReactElement.(JSObject) => HtmlElement(render)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const AppLayout =()=>{
   return(
    <Provider store ={appStore}>
    <div >
      <Header />
      <Outlet />
      </div>
      </Provider>
   )
   
}

const appRouter = createBrowserRouter([
   {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Bodycontainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />

    },
    {
      path: "/cart",
      element: <Cart />

  },{
        path: "/restaurants/:resId",
        element: <RestaurantMenu />

    }]
}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);