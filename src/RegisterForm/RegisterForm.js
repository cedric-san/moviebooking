import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = props => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    checkbox: ''
  });
  const { name, email, password, checkbox } = form;
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={onSubmitHandler} className="form-group container">
      <p className="text-primary h3 text-center"> Sign Up</p>
      <div>
        <label htmlFor="">User Name:</label>
        <input
          name="name"
          value={name}
          onChange={e => {
            setForm({ ...form, name: e.target.value });
          }}
          type="text"
          className="form-control"
          placeholder="enter name"
        />
      </div>
      <div>
        <label htmlFor="">E-mail:</label>
        <input
          name="email"
          value={email}
          type="text"
          onChange={e => {
            setForm({ ...form, email: e.target.value });
          }}
          className="form-control"
          placeholder="e-mail"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          value={password}
          type="password"
          name="password"
          onChange={e => {
            setForm({ ...form, password: e.target.value });
          }}
          placeholder="******"
          className="form-control"
        />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" />
        <label id="terms">I agree with term and conditions </label>
      </div>

      <button type="submit" class="btn btn-primary text-uppercase">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
