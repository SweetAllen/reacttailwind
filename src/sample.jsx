
//context and props
// import { createContext, useContext } from "react";
// const MyContext=createContext('$100')
// function App(){
//   return <Fruit name="You have to pay"/>
// }

import { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import Air from "./Air";
import Hi from "./Hi";
import User from "./User";
import Hello from "./Hello";
// import { Route, Routes } from "react-router-dom";
// import Air from "./Air";

// function Fruit(props){
//   return <Flowers data={props.name} />
// }

// function Flowers(props){
//  const data= useContext(MyContext)
//   return <h1>{props.data} * {data}</h1>
// }



// export default App;

///destructuring

// const [r,b,h]=['red','green','blue']
// console.log(r)
// function App () {
//   return <h1>hello</h1>
// }

// export default App;

// const A= () => <h1>A</h1>
// const B= () => <h1>B</h1>

// function App(){
//   return (
//     // <Air/>

//     <div>
//       <Routes>
       {/* <Route to="/" element={<A/>}></Route>
       <Route to="/b" element={<B/>}></Route>

      </Routes>
    </div>
  )
}



export default App; */}


const App =()=>{
  return <Fragment>
    <Routes>
      <Route path="user">
         <Route index element={<User />}></Route>  
            <Route  path=":userId" element={<User />}></Route>

      <Route path="hello" element={<Hello />}></Route>
      <Route path="hi" element={<Hi />}></Route>

      </Route>
   

    </Routes>
  </Fragment>
}


export default App;