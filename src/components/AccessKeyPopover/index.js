// @flow
import React, { Component } from "react";
//import styles from "./index.css";
import PopOverComponent from "../PopOverComponent";
import { accessKeyPref } from "../../common/default";
type Props = {
  preferences: Object
};
type State = {};

class Accesskeypopover extends Component<Props, State> {
  render() {
    return (
      <PopOverComponent
        pref={this.props.preferences ? this.props.preferences : null}
      />
    );
  }
}
Accesskeypopover.defaultProps = {
  preferences: accessKeyPref
};
export default Accesskeypopover;
