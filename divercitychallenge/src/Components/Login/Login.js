import "./styles.scss";

import React, { Component } from "react";
import axios from "axios";
import small from "./small.png";

export default class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("Works");
    const data = {
      username: this.username,
      password: this.password
    };

    axios
      .post("https://divercity-test.herokuapp.com/login", data)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
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
              <div id="outer">
                <h2 className="login">Login</h2>
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
                <button className="button">Login</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
