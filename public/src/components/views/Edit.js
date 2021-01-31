import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export class Edit extends Component {
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
    const { name, lname } = this.state;
    e.preventDefault();

    const url = "http://localhost:8080/edit/";
    const obj = {
      name: name,
      lname: lname,
    };

    axios
      .put(url + this.props.match.params.id, obj)
      .then((res) => console.log(res.data));

    this.props.history.push("/");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              className="form-control"
              name="firstName"
              onChange={this.handleFirstName}
              placeholder="First Name"
              value={this.state.name}
            />
          </p>
          <p>
            <input
              className="form-control"
              name="lastName"
              onChange={this.handleLastName}
              placeholder="Last Name"
              value={this.state.lname}
            />
          </p>
          <button className="btn btn-secondary btn-block">Add</button>
        </form>
      </div>
    );
  }
}
