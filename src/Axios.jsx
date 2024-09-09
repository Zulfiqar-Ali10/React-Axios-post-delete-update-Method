import React, {useEffect, useState} from "react";
import axios from "axios";

function Axios(){
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUserData(response.data)
        })
    },[])

    
    return(
        <>
        <h2>Hello Axios</h2>
        <div>
            {userData.map((data)=>{
                return(
                    <div>{data.name}</div>
                )
            })}
        </div>
        </>
    )

}


export default Axios;