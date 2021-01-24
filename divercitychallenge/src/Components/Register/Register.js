import React, { Component } from "react";
import axios from "axios";
import small from "./small.png";
import "./styles.scss";

export default class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("Works");
    const data = {
      username: this.username,
      password: this.password,
      name: this.name
    };

    axios
      .post("https://divercity-test.herokuapp.com/register", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <h2 className="container__register">Register</h2>
              <img className="image" src={small} alt="logo" />
              <label>Username</label>
              <input
                type="username"
                className="form-control"
                placeholder="Username"
                onChange={e => (this.username = e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => (this.password = e.target.value)}
              />
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Name"
                onChange={e => (this.name = e.target.value)}
              />
              <button className="button">Register</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
