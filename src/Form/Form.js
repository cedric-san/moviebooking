import React from 'react';
import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      buttonName: 'LOG IN'
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    let result = this.state;
    console.log(result);
  }

  render() {
    return (
      <div className="containerForm">
        <form onSubmit={this.submitHandler} className="form-group container">
          <p className="text-primary h3 text-center">Log in</p>
          <div>
            <label htmlFor="">User Name:</label>
            <input
              name="name"
              value={this.state.userName}
              onChange={this.changeHandler}
              type="text"
              className="form-control"
              placeholder="enter name"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              value={this.state.password}
              type="password"
              name="password"
              onChange={this.changeHandler}
              placeholder="******"
              className="form-control"
            />
          </div>
          <div>
            <a id="fpassword" href="" className="text-primary" type="button">
              Forget Password
            </a>
          </div>

          <button
            id="login"
            type="submit"
            class="btn btn-primary text-uppercase"
          >
            log in
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
