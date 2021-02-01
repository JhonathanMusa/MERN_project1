import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.lname}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>Edit</Link>||
      <Link to={"/delete/" + props.user._id}>Delete</Link>
    </td>
  </tr>
);

class GetInfo extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const url = "http://localhost:8080/users/";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  userList() {
    return this.state.users.map((user, i) => {
      return <User user={user} key={i} />;
    });
  }

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
