import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.lname}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>
        <button className="btn btn-warning">
          Edit <i className="fas fa-edit"></i>
        </button>
      </Link>
      <Link to={"/delete/" + props.user._id}>
        <button className="btn btn-danger">
          Delete <i className="fas fa-user-minus"></i>
        </button>
      </Link>
    </td>
  </tr>
);

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/users/";
    const getUsers = async () => {
      try {
        const response = await axios({ url: url });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [setUsers]);

  const userList = () => {
    return users.map((user, i) => {
      return <User user={user} key={i} />;
    });
  };

  return (
    <div>
      {users.length > 0 ? (
        <table className="table text-center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{userList()}</tbody>
        </table>
      ) : (
        <h2 className="text-center">Nothing to see</h2>
      )}
    </div>
  );
};
