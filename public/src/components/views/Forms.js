import React, { Component } from "react";
class Forms extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input name="firstName" placeholder="First Name" />
          </p>
          <p>
            <input name="lastName" placeholder="Last Name" />
          </p>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Forms;
