import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// hooks
import { useCustomForm } from "../../hooks/forms";
import { useVerifyLogin } from "../../hooks/authentication";

// actions
import { invite } from "../../actions/user/invite";

// components
import InviteForm from "./InviteForm";
import GuestTopBar from "../Dashboard/TopBar/GuestTopBar";
import Wizard from "../../common/wizard";

const validate = ({ password_confirmation, password, fname, lname }) => {
  let errors = {};
  if (!fname?.length) {
    errors.fname = "first name can not be empty";
  }
  if (!lname?.length) {
    errors.lname = "last name can not be empty";
  }
  if (password?.length < 6 || !password?.length) {
    errors.password = "password too short";
  }

  if (password && password_confirmation !== password) {
    errors.password_confirmation = "must be same as password";
  }

  return errors;
};

const Invite = () => {
  const { pending, user, error } = useSelector((state) => state?.invite);
  const dispatch = useDispatch();
  const { invitation_token } = useParams();
  const [value, handleChange, handleSubmit, validationErrors] = useCustomForm(
    {},
    dispatch,
    invite,
    validate,
    invitation_token
  );

  console.log(invitation_token);

  const history = useHistory();
  const inviteError = useVerifyLogin(
    user,
    pending,
    error,
    history,
    "Invitation Accepted!",
    "/payment",
  );
  return (
    <>
      <GuestTopBar />
      <Wizard classes="hide-for-mobile" steps={["active", "progress", "inactive"]}  />
      <div className="invite flex-jc-c flex-ai-c">
        <div className="invite-form">
          <h3 className="invite-form__header title">Welcome to your Gifting Board</h3>
          <InviteForm
            onChange={handleChange}
            onClick={handleSubmit}
            value={value}
            pending={pending}
            errors={{ validate: validationErrors, server: inviteError }}
          />
        </div>
      </div>
    </>
  );
};

export default Invite;
