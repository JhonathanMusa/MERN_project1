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
        {this.state.users.map((user) => {
          return (
            <div className="flex-container" key={user._id}>
              <img src={user.img} alt={user.name} />
              <div className="card-text">
                {user.name.toUpperCase()} {user.lname.toUpperCase()} {user.age}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetInfo;
