// @flow
import React, { Component } from "react";

import { FormGroup, FormControl, Form, Image } from "react-bootstrap";

import styles from "./index.module.css";

const funnelIcon = require("../../images/funnel.svg");
const settingsFilterIcon = require("../../images/settings-icon.svg");
const plusIcon = require("../../images/plus.svg");

class AnalyticsTab extends Component {
  render() {
    return (
      <div className={`${styles.formWrapper}`}>
        <Form
          inline
          className={`${styles.filterBar} ${styles.analyticsFilterBar}`}
        >
          <div className={`${styles.viewRadioButton}`}>
            <label>
              <input type="radio" name="radio" />
              <span
                className={`${styles.labelText} ${styles.font12}  ${
                  styles.fontLato
                }`}
              >
                Build View
              </span>
            </label>

            <label>
              <input type="radio" name="radio" />
              <span
                className={`${styles.labelText} ${styles.font12}  ${
                  styles.fontLato
                }`}
              >
                Test View
              </span>
            </label>
          </div>

          <div className={`${styles.filterIcon}`}>
            <span>
              <Image src={funnelIcon} />
            </span>
          </div>

          <FormGroup
            controlId="formControlsSelect1"
            className={`${styles.dropdownSelect}`}
          >
            {/* <ControlLabel className={`${styles.labelText}`}>Username: </ControlLabel> */}
            <FormControl componentClass="select" placeholder="select">
              <option value="select">All Users</option>
              <option value="other">...</option>
              <option value="other1">...</option>
              <option value="other2">...</option>
              <option value="other3">...</option>
              <option value="other4">...</option>
              <option value="other5">...</option>
            </FormControl>
          </FormGroup>

          <div className={`${styles.timeLine} ${styles.font12}`}>
            <span>Today</span>

            <span className={`${styles.active}`}>This Week </span>

            <span>This Month</span>
          </div>

          <div className={`${styles.settingsIcon}`}>
            <span>
              <Image src={settingsFilterIcon} />
            </span>
          </div>
        </Form>
        <div className={`${styles.addGraphButton}`}>
          {/* <span> */}
          <Image src={plusIcon} />
          {/* </span> */}
          <span className={`${styles.text} ${styles.font12}`}>Add graph</span>
        </div>
      </div>
    );
  }
}

export default AnalyticsTab;
