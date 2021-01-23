import React, { Component } from "react";
import "./GetInfo.css";

class GetInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/users";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        this.setState({
          users: user,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>User System</h1>
        <table className="table" border="1">
          <thead>
            <tr className="tableHead">
              <th>F. Name</th>
              <th>L. Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user._id} className="tableBody">
                  <td>{user.name}</td>
                  <td>{user.lname}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetInfo;
