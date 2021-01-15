import React from "react";
import Types from "prop-types";
import { Steps } from "antd";

const Wizard = ({ classes, steps }) => (
  <div className={`container ${classes} flex flex-jc-c`}>
    <div className="wizard">
      <Steps current={steps.length - 1} size="small">
        <Steps.Step title="Invitation" />
        <Steps.Step title="Registration" />
        <Steps.Step title="Payment Details" />
      </Steps>
    </div>
  </div>
);

Wizard.propTypes = {
  classes: Types.string,
  steps: Types.array,
};

export default Wizard;
