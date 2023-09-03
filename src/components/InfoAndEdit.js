import React, { useState } from "react";
const InfoAndEdit = ({ data }) => {
  const [editing, setEditing] = useState(true);
  const [showError, setShowError] = useState(false);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  function submitEdit() {
    if (title && firstName && lastName && dateOfBirth) {
      setEditing((prevState) => !prevState);
    } else {
      setShowError(true);
    }
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
          <option>Mr.</option>
          <option>Mrs.</option>
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
          {title}
          {firstName}
          {lastName}
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
      {showError ? error : null}
    </div>
  );
};
export default InfoAndEdit;
