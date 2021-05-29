import React, { useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/new-user";

export const Forms = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lname: "",
  });

  const handleInput = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addData = async () => {
      try {
        const { data } = await axios.post(URL, newUser);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    addData();

    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            className="form-control"
            name="name"
            placeholder="First Name"
            onChange={handleInput}
          />
        </p>
        <p>
          <input
            className="form-control"
            name="lname"
            placeholder="Last Name"
            onChange={handleInput}
          />
        </p>

        <button className="btn btn-success btn-block">
          Add <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};
