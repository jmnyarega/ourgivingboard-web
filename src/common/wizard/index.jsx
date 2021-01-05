import React from "react";
import Types from "prop-types";

const Wizard = ({ classes, steps }) => (
  <div className={`container ${classes} wizard`}>
    <ul className="progressbar">
      <li className={steps && steps[0]}>Invitation</li>
      <li className={steps && steps[1]}>Registration</li>
      <li className={steps && steps[2]}>Payment Details</li>
    </ul>
  </div>
);

Wizard.propTypes = {
  classes: Types.string,
  steps: Types.array,
};

export default Wizard;
