import React, { Component } from "react";
import "./GetInfo.css";

/* const getInfo = async () => {
  const res = await fetch("http://localhost:8080/users");
  const data = await res.json();
  return data
}; */

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
    /* getInfo(); */
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
                <tr key={user.id} className="tableBody">
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
