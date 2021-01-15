import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Oops! Something is wrong.</p>
    <Link className="button btn btn-primary" to="/home">
      <i className="fa fa-home"></i> Go back in initial page, is better.
    </Link>
  </div>
);

export default NotFound;
