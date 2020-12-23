import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCustomForm } from "../../hooks/forms";
import InviteForm from "./InviteForm";
import { invite } from "../../actions/user/invite";

const verifyInvite = (user, pending, error, history) => {
  useEffect(() => {
    if (user?.message === "invite success" && pending === false) {
      history.push("/home");
    } else if (error && pending === false) {
      return error.message;
    }
  }, [user, pending, error]);
};

const Invite = () => {
  const { pending, user, error } = useSelector((state) => state?.invite);
  const dispatch = useDispatch();
  const [value, handleChange, handleSubmit] = useCustomForm(
    {},
    dispatch,
    invite
  );

  const history = useHistory();
  verifyInvite(user, pending, error, history);

  return (
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
        <h3 className="login-form__header">Welcome to your Gifting Board</h3>
        <InviteForm
          onChange={handleChange}
          onClick={handleSubmit}
          value={value}
          pending={pending}
        />
      </div>
    </div>
  );
};

export default Invite;
