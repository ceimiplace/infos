import React, { useState } from "react";
const InfoAndEdit = ({ data, updateState }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);

  const [day, month, year] = data.dob.split("/");
  const dateObject = `${year}-${month}-${day}`;

  const [dateOfBirth, setDateOfBirth] = useState(dateObject);

  function saveChanges() {
    setEditing(false);
    updateState({ title, firstName, lastName, dob: dateOfBirth });
  }
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
      <h3>User panel</h3>
      {editing ? editContainer : detailsContainer}
      {editing ? (
        <button onClick={() => saveChanges()}>Save</button>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
    </div>
  );
};
export default InfoAndEdit;
