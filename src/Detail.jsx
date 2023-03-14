import React ,{useEffect, useState}from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams()

    const [data,setData] = useState([])
    useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  
      .then(response => response.json())
      .then(data => setData(data))
    }, [])
    return (
      <div className=' container mx-auto'>
        <Link to="/">Back</Link>
      <Link to='/'>Home</Link>
      <div className=' border p-5 rounded-xl shadow-xl mt-10'>
      <img src={data.url} className=" mb-5 rounded-lg" alt=''></img>

 <h1> User Detail {id} </h1>
 <h1> Title {data.title} </h1>
 </div>
</div>       
    );
}

export default Detail;
