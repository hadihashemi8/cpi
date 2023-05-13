import './App.css'
import routes from './router'
import { useRoutes } from "react-router-dom"


function App() {

  let router = useRoutes(routes)

  return (
    <>
      {router}
   
    </>
  )
}

export default App
