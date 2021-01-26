import React, { Component } from "react";
import axios from "axios";
class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    axios
      .post("http://localhost:8080/new-user", user)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state);
  };

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
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

export default Forms;
