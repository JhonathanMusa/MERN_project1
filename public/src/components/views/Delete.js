import React, { Component } from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export class Delete extends Component {
  state = {
    name: "",
    lname: "",
  };

  componentDidMount() {
    const url = "http://localhost:8080/user/";
    axios
      .get(url + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          lname: response.data.lname,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    const url = "http://localhost:8080/user/delete/";
    axios
      .delete(url + this.props.match.params.id, user)
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  };

  render() {
    const { name, lname } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              name="firstName"
              onChange={this.handleFirstName}
              type="text"
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="lastName"
              onChange={this.handleLastName}
              type="text"
              value={lname}
            />
          </div>
          <button className="btn btn-danger btn-block">Delete</button>
        </form>
      </div>
    );
  }
}
