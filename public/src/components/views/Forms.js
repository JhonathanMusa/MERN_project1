import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              className="form-control"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleFirstName}
            />
          </p>
          <p>
            <input
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleLastName}
            />
          </p>

          <button className="btn btn-success btn-block">Add</button>
        </form>
      </div>
    );
  }
}
