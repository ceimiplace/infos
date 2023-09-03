import React, { useState } from "react";
const InfoAndEdit = ({data}) =>{
    const [editing,setEditing] = useState(false);
   
    const [title,setTitle] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [dateOfBirth,setDateOfBirth] = useState("");
    return <div className='containerInfo'>
    <div className="editContainer">
    <div>
    <label htmlFor="title">Title</label>
    <select name="title" id="title" onChange={(elem)=>{setTitle(elem.target.value)}} value={title}>
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Miss</option>
    </select>
    </div>
    <div>
    <label htmlFor="firstName" >First Name</label>
    <input type="text" required  id="firstName" onChange={(elem)=>setFirstName(elem.target.value)} value={firstName}/>
    </div>
    <div>
    <label htmlFor="lastName">Last Name</label>
    <input type="text" required id="lastName" onChange={(elem)=>setLastName(elem.target.value)} value={lastName}/>
    </div>
    <div>
    <label htmlFor="dateOfBirth">Date of bith</label>
    <input type="date" required id="dateOfBirth" onChange={(elem)=>setDateOfBirth(elem.target.value)} value={dateOfBirth}/>
    </div>
    </div>
    <div className="detailsContainer"></div>
    <button onClick={()=>setEditing(prevState=>{console.log("clicked"); return !prevState})}>Edit</button>
    
  </div>
}
export default InfoAndEdit;