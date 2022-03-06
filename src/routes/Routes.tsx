import { useRoutes } from "react-router-dom";

//Páginas
import Home from "../pages/Home";
import WishlistPlanet from "../pages/WishlistPlanet";


const Routes = ()=>{
    return useRoutes([
        {path:"/",element:<Home/>},
        {path:"/wishlist-planet/",element:<WishlistPlanet/>},

    ])
}
export default Routes;