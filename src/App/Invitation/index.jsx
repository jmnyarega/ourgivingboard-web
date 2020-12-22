import React from "react";

const Invitation = ({ user = "john@doe.com" }) => (
  <div className="login flex-jc-c flex-ai-c">
    <div className="login-form">
      <form>
        <h3 className="login-form__header">
          Welcome {user}, complete your registration below
        </h3>
        <label>
          Password :
          <input type="email" className="form-control" />
        </label>
        <label>
          Confirm Password:
          <input type="password" className="form-control" />
        </label>
        <button className="login-form__btn btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
  </div>
);

export default Invitation;
