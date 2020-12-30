import React from "react";
import PropTypes from "prop-types";

const InviteForm = ({ onChange, onClick, value, pending, errors }) => (
  <form>
    <label> First Name:
      <input
        onChange={onChange}
        value={value.fname || ""}
        type="text"
        name="fname"
        className="form-control"
      />
    </label>
      {errors.validate?.fname && (
        <div className="login-form__with-errors">{errors.validate?.fname}</div>
      )}
    <label> Last Name:
      <input
        onChange={onChange}
        value={value.lname || ""}
        type="text"
        name="lname"
        className="form-control"
      />
    </label>
      {errors.validate?.lname && (
        <div className="login-form__with-errors">{errors.validate?.lname}</div>
      )}
    <label> Password:
      <input
        onChange={onChange}
        value={value.password || ""}
        type="password"
        name="password"
        className="form-control"
      />
    </label>
      {errors.validate?.password && (
        <div className="login-form__with-errors">{errors.validate?.password}</div>
      )}
    <label> Confirm Password:
      <input
        onChange={onChange}
        value={value.confirmPassword || ""}
        type="password"
        name="confirmPassword"
        className="form-control"
      />
    </label>
      {errors.validate?.confirmPassword && (
        <div className="login-form__with-errors">{errors.validate?.confirmPassword}</div>
      )}
    <button
      onClick={onClick}
      disabled={pending}
      className="login-form__btn btn btn-primary btn-block"
    >
      {pending ? "Sending..." : "Login"}
    </button>
    {JSON.stringify(errors.server, null, 2)}
  </form>
);

InviteForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.object,
  errors: PropTypes.object,
  pending: PropTypes.bool,
};

export default InviteForm;
