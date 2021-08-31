import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const Forms = ({ setUsers }) => {
  const [userData, setUserData] = useState([
    {
      name: "",
      phone: "",
    },
  ]);

  const { name, phone } = userData;

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addUser = {
      id: uuid(),
      name,
      phone,
    };

    if (name !== "" && phone !== "") {
      setUsers((actual) => [...actual, addUser]);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="form-control"
        name="name"
        placeholder="Name"
        onChange={handleInput}
      />
      <br />
      <input
        autoComplete="off"
        className="form-control"
        name="phone"
        placeholder="Phone"
        onChange={handleInput}
      />

      <button className="btn btn-primary mt-3 w-100">Add</button>
    </form>
  );
};
