import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Automationlogstable from "./index.js";

storiesOf("Automationlogstable", module).add("default", () => (
  <Automationlogstable />
));
