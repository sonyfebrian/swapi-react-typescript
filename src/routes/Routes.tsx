import { useRoutes } from "react-router-dom";

//Páginas
import Home from "../pages/Home";
import DetailPlanet from "../pages/DetailPlanet";


const Routes = ()=>{
    return useRoutes([
        {path:"/",element:<Home/>},
        {path:"/Planet/",element:<DetailPlanet/>},

    ])
}
export default Routes;