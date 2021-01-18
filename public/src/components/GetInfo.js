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
    fetch("http://localhost:8080/users")
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
        <table className="table">
          <thead>
            <tr className="tableHead">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
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
