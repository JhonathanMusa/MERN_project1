import React, { Component } from "react";
import axios from "axios";

export class Forms extends Component {
  state = {
    name: "",
    lname: "",
  };

  handleFirstName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lname: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, lname } = this.state;

    const user = {
      name: name,
      lname: lname,
    };

    axios
      .post("http://localhost:8080/new-user", user)
      .then((res) => console.log(res.data));

    this.setState({
      name: name,
      lname: lname,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              name="firstName"
              placeholder="First Name"
              onChange={this.handleFirstName}
            />
          </p>
          <p>
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleLastName}
            />
          </p>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
