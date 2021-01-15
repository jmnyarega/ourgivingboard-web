import React from "react";
import PropTypes from "prop-types";

const Notifications = ({ notification }) => (
  <>
    <div className="notification-container">
      <h3>
        Notifications <i className="fa fa-cog dp48 right" />
      </h3>
      {notification && notification.length ? (
        <>
          <input
            className="checkbox"
            type="checkbox"
            id="size_4"
            value="small"
            checked
          />
          <label className="notification" htmlFor="size_4">
            <i className="fa fa-times-circle right" />
          </label>
        </>
      ) : (
        <>
          <input
            className="checkbox"
            type="checkbox"
            id="size_4"
            value="small"
            checked
          />
          <label className="notification" htmlFor="size_4">
            You have no notications
          </label>
        </>
      )}
    </div>
  </>
);

Notifications.propTypes = {
  notification: PropTypes.array,
};

export default Notifications;
