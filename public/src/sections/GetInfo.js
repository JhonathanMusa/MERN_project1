import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetInfo.css";

class GetInfo extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const url = "http://localhost:8080/users/";

    axios
      .get(url)
      .then((res) => res.data)
      .then((user) => {
        this.setState({
          users: user,
        });
      });
  }

  userList = () => {
    return this.state.users.map((user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.lname}</td>
          <td>
            <Link to={"/edit/"}>Edit</Link>|<Link to="/delete/">Delete</Link>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table text-center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}

export default GetInfo;
