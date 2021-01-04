import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ onChange, onClick, value, pending, errors }) => (
  <>
    <form>
      <label>
        Email:
        <input
          onChange={onChange}
          value={value.email || ""}
          type="email"
          name="email"
          className="form-control"
        />
      </label>
      {errors.validate?.email && (
        <div className="login-form__with-errors">{errors.validate?.email}</div>
      )}
      <label>
        Password:
        <input
          onChange={onChange}
          value={value.password || ""}
          type="password"
          name="password"
          className="form-control"
        />
      </label>
      {errors.validate?.password && (
        <div className="login-form__with-errors">
          {errors.validate?.password}
        </div>
      )}
      <button
        onClick={onClick}
        disabled={pending}
        className="login-form__btn btn btn-primary btn-block"
      >
        {pending ? "Sending..." : "Login"}
      </button>
    </form>
    {errors?.server && (
      <div className="alert alert-danger">
        {JSON.stringify(errors.server, null, 2)}
      </div>
    )}
    <div className="login-form__signup">
      <button className="btn btn-outline-primary btn-block">Sign Up</button>
    </div>
  </>
);

LoginForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.object,
  errors: PropTypes.object,
  pending: PropTypes.bool,
};

export default LoginForm;
