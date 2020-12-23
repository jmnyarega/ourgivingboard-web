import React from "react";
import PropTypes from "prop-types";

const Invitation = ({ onChange, onClick, value, pending }) => (
  <form>
    <label> Email:
      <input
        onChange={onChange}
        value={value.password || ""}
        type="password"
        name="password"
        className="form-control"
      />
    </label>
    <label> Password:
      <input
        onChange={onChange}
        value={value.confirmPassword || ""}
        type="password"
        name="confirmPassword"
        className="form-control"
      />
    </label>
    <button
      onClick={onClick}
      disabled={pending}
      className="login-form__btn btn btn-primary btn-block"
    >
      {pending ? "Sending..." : "Login"}
    </button>
  </form>
);

Invitation.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.object,
  pending: PropTypes.bool,
};

export default Invitation;
