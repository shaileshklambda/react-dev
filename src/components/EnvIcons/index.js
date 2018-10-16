// @flow
import React from "react";
import styles from "./index.module.css";
import { Image } from "react-bootstrap";

const Envicons = props => (
  <div
    className={
      styles[
        props.envInfo && props.envInfo.data && props.envInfo.data.className
          ? props.envInfo.data.className
          : "default"
      ]
    }
  >
    {props.envInfo && props.envInfo.data ? (
      props.envInfo.data.type === "mobile" ? (
        <ul className={`${styles.platformIconTray}`}>
          <li>{<Image src={"/icons/" + props.envInfo.data.os_icon} />}</li>
          <li>
            {props.envInfo.data.device_name} | {props.envInfo.data.os_version}
          </li>
        </ul>
      ) : (
        <ul className={`${styles.platformIconTray}`}>
          <li>{<Image src={"/icons/" + props.envInfo.data.browser_icon} />}</li>
          <li>{props.envInfo.data.browser_version}</li>
          <li> {<Image src={"/icons/" + props.envInfo.data.os_icon} />}</li>
          <li>{props.envInfo.data.os_version}</li>
          <li>{<Image src={"/icons/" + props.envInfo.data.device_icon} />}</li>
          <li>{props.envInfo.data.screen_resolution}</li>
        </ul>
      )
    ) : null}
  </div>
);

export default Envicons;
