import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import OrderProducts from "./Pages/OrderProducts/OrderProducts"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Login from "./Pages/Login/Login"
import Backet from "./Pages/Backet/Backet"
import Articles from "./Pages/Articles/Articles"

let routes = [
    { path: '/', element: <Home /> },
    { path: '/Products', element: <Products /> },
    { path: '/OrderProducts', element: <OrderProducts /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/Login', element: <Login /> },
    { path: '/Backet', element: <Backet /> },
    { path: '/Articles', element: <Articles /> },

]

export default routes