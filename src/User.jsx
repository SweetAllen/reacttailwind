import React ,{useEffect, useState}from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const User = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')
      .then(response => response.json())
      .then(data => setData(data))
    }, [])
    return (
         <>
         <div className=' container mx-auto'>

         <h1>User</h1>
        
 <div className=' grid grid-cols-4 gap-5'>
 {data.map((item)=>(

 <div key={item.id} className=" border p-5 rounded-xl"
 onClick={()=>navigate(`/detail/${item.id}`)}
 >
  <img src={item.url} className=" mb-5 rounded-lg" alt=''></img>
  {item.title}  
  <Link to={`/detail/${item.id}`} className=" text-green-500">See More</Link>
  </div>
 ))
}

 </div>

 </div>


         </>
    );
}

export default User;
