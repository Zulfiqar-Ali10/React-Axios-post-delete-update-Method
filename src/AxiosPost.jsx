import axios from "axios";
import React, {useState} from "react";

function AxiosPost() {
    const data = {Firstname: "", Lastname: ""};
    const [inputData, setInputdata] = useState(data)

    const handleData = (e)=>{
   setInputdata({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response);  
        })
    }

    const handleUpdate = (e)=>{
     e.preventDefault();
     axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
     .then((response)=>{
         console.log(response);
    })
}

const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=>{
        console.log(response);
   })
}

    return (
        <>
       <div className="form">
       <label>First Name: </label>
         <input type="text" name="Firstname" value={inputData.Firstname} onChange={handleData} /> <br /> <br />
         <label>Last Name: </label>
         <input type="text" name="Lastname" value={inputData.Lastname} onChange={handleData} /> <br />
         <button onClick={handleSubmit} className="btn1">Submit</button>
         <button onClick={handleUpdate} className="btn2">Update</button>
         <button onClick={handleDelete} className="btn3">Delete</button>
       </div>
        
        </>
    )
}

export default AxiosPost;