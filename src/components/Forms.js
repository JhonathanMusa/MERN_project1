import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const Forms = ({ setUsers }) => {
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addUser = {
      id: uuid(),
      name,
    };

    if (name !== "") {
      setUsers((actual) => [...actual, addUser]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="form-control"
        name="name"
        placeholder="First Name"
        onChange={handleInput}
      />

      <button className="btn btn-primary mt-2 w-100">Add</button>
    </form>
  );
};
