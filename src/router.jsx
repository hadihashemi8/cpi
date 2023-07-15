import Home from "./Pages/Home/Home"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Articles from "./Pages/Articles/Articles"
import ArticleText from "./Pages/ArticleText/ArticleText"
import ContactUs from "./Pages/ContactUs/ContactUs"



let routes = [
    { path: '/', element: <Home /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/ContactUs', element: <ContactUs /> },
    { path: '/Articles', element: <Articles /> },
    { path: '/Article/:ArticleId', element: <ArticleText /> },
]

export default routes