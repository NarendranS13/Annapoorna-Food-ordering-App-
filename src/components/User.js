import { useState } from "react";

const User = (props) => {

    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    console.log(count);

    useEffect(()=>{
        //We use to call the API call.
    },[]);
   
  return (
    <div className = "card">
        <h2 className="card-title">{props.name}</h2>
        <h3 className="card-text text-small">Location: {props.location}</h3>
        <h3 className="card-text">Email: nren115@gmail.com</h3>
        <h3 className="card-text">Phone: 7397371808</h3>
        <h3 className="card-text">Count={count}</h3>
        <h3 className="card-text">Count2={count2}</h3>


    </div>
  )
} 

export default User;