import React, { useEffect, useState } from "react";
import Axios from "axios";

export const Edit = (props) => {
  const [editUser, setEditUser] = useState({
    name: "",
    lname: "",
  });

  const { id } = props.match.params;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/user/${id}`);
        setEditUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id, setEditUser]);

  const handleInput = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`http://localhost:8080/user/edit/${id}`, editUser).then((res) =>
      console.log(res.data)
    );

    props.history.push("/");
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            onChange={handleInput}
            type="text"
            value={editUser.name}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="lname"
            onChange={handleInput}
            type="text"
            value={editUser.lname}
          />
        </div>
        <button className="btn btn-warning btn-block">
          Update <i className="fas fa-edit"></i>
        </button>
      </form>
    </div>
  );
};
