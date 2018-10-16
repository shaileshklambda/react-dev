import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import styles from "./index.module.css";
import Envicons from "./index.js";
import { mobileEnv, pcEnv, appleEnv } from "./storybook_data/EnvIconsData";

storiesOf("Envicons", module).add("Mobile", () => (
  <Envicons styles={styles} envInfo={mobileEnv} />
));
storiesOf("Envicons", module).add("Windows", () => (
  <Envicons envInfo={pcEnv} />
));
storiesOf("Envicons", module).add("Apple", () => (
  <Envicons envInfo={appleEnv} />
));
