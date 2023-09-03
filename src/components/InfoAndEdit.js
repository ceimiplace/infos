import React from "react";
const InfoAndEdit = () =>{
    return   <div className='containerInfo'>
    <div>
    <label for="title">Title</label>
    <select name="title" id="title">
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Miss</option>
    </select>
    </div>
    <div>
    <label for="firstName" >First Name</label>
    <input type="text" required  id="firstName" />
    </div>
    <div>
    <label for="lastName">Last Name</label>
    <input type="text" required id="lastName"/>
    </div>
    <div>
    <label for="dateOfBirth">Date of bith</label>
    <input type="date" required id="dateOfBirth"/>
    </div>
  </div>
}
export default InfoAndEdit;