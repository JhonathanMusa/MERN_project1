import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: 0
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>First Name: </label>
            <input
              onChange={(e) =>
                this.setState({
                  firstName: e.target.value,
                })
              }
              value={this.state.firstName}
            />
          </p>
          <p>
            <label>Last Name: </label>
            <input
              onChange={(e) =>
                this.setState({
                  lastName: e.target.value,
                })
              }
              value={this.state.lastName}
            />
          </p>
          <p>
            <label>Age: </label>
            <input
              onChange={(e) => {
                this.setState({
                  age: e.target.value,
                });
              }}
              type="number"
              value={this.state.age}
            />
          </p>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Forms;
