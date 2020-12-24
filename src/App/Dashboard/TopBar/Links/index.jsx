import React from "react";
import PropTypes from "prop-types";

const Links = ({ classes }) => (
  <div className={classes}>
    <a href="#">Home</a>
    <a href="#">Capital Imperial</a>
    <a href="#">My Communities</a>
    <a href="#">FAQ</a>
    <a href="/">Log out</a>
  </div>
);

Links.propTypes = {
  classes: PropTypes.string,
};

export default Links;
