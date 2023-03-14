

import { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import User from "./User";



const App =()=>{
  

  return (
    <Routes>
    <Route  path="/" element={<User/>}></Route>

    <Route  path="/detail/:id" element={<Detail/>}></Route>



</Routes>

  )
  
}


export default App;