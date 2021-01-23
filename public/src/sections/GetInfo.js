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
        <div>
          {this.state.users.map((user) => {
            return (
              <div className="table">
                <div key={user._id} className="card">
                  <div className="img">
                    <img src={user.img} width="200" height="200" alt={user.name} />
                  </div>
                  <div className="card-text">
                    {user.name.toUpperCase()} {user.lname.toUpperCase()}{" "}
                    {user.age}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GetInfo;
