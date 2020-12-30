import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCustomForm } from "../../hooks/forms";
import { useVerifyLogin } from "../../hooks/authentication";
import InviteForm from "./InviteForm";
import { invite } from "../../actions/user/invite";

const validate = ({ confirmPassword, password }) => {
  let errors = {};
  if (password?.length < 6) {
    errors.password = "password too short";
  }

  if (password && confirmPassword !== password) {
    errors.confirmPassword = "must be same as password";
  }

  return errors;
};

const Invite = () => {
  const { pending, user, error } = useSelector((state) => state?.invite);
  const dispatch = useDispatch();
  const [value, handleChange, handleSubmit, validationErrors] = useCustomForm(
    {},
    dispatch,
    invite,
    validate
  );

  const history = useHistory();
  const inviteError = useVerifyLogin(
    user,
    pending,
    error,
    history,
    "invite success"
  );
  return (
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
        <h3 className="login-form__header">Welcome to your Gifting Board</h3>
        <InviteForm
          onChange={handleChange}
          onClick={handleSubmit}
          value={value}
          pending={pending}
          errors={{ validate: validationErrors, server: inviteError }}
        />
      </div>
    </div>
  );
};

export default Invite;
