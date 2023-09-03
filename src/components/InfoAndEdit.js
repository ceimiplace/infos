import React, { useState } from "react";
const InfoAndEdit = ({ data }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(data.dob);
  console.log(data);
  function submitEdit() {}
  const editContainer = (
    <form className="editContainer">
      <div>
        <label htmlFor="title">Title</label>
        <select
          name="title"
          id="title"
          onChange={(elem) => {
            setTitle(elem.target.value);
          }}
          value={title}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
        </select>
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          required
          id="firstName"
          onChange={(elem) => setFirstName(elem.target.value)}
          value={firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          required
          id="lastName"
          onChange={(elem) => setLastName(elem.target.value)}
          value={lastName}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of bith</label>
        <input
          type="date"
          required
          id="dateOfBirth"
          onChange={(elem) => setDateOfBirth(elem.target.value)}
          value={dateOfBirth}
        />
      </div>
    </form>
  );

  const detailsContainer = (
    <div className="detailsContainer">
      <ul>
        <li>
          {title} {firstName} {lastName}
        </li>
        <li>{dateOfBirth}</li>
      </ul>
    </div>
  );
  const error = (
    <div style={{ color: "red" }}>
      Error! Please provide all the required inputs!
    </div>
  );
  return (
    <div className="containerInfo">
      {editing ? editContainer : detailsContainer}
      <button type="submit" onClick={submitEdit}>
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
};
export default InfoAndEdit;
