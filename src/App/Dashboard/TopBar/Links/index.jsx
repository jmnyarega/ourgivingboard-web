import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cleanLocalStorage } from "../../../../helpers/localStorage";

const logout = () => {
  cleanLocalStorage();
  location.href = "/#/";
  location.reload();
};

const Links = ({ classes, icons = [] }) => (
  <div className={classes}>
    <div>
      <i className={`fa fa-${icons[0]}`} />
      <Link to="/home">Home </Link>
    </div>
    <div>
      <i className={`fa fa-${icons[1]}`} />
      <Link to="#">Capital Imperial</Link>
    </div>
    <div>
      <i className={`fa fa-${icons[2]}`} />
      <Link to="#">My Communities</Link>
    </div>
    <div>
      <i className={`fa fa-${icons[3]}`} />
      <Link to="#">FAQ</Link>
    </div>
    <div>
      <i className={`fa fa-${icons[4]}`} />
      <Link to="/" onClick={logout}>
        Log out
      </Link>
    </div>
  </div>
);

Links.propTypes = {
  classes: PropTypes.string,
  icons: PropTypes.array,
};

export default Links;
