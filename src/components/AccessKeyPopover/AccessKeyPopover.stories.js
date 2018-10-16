import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Accesskeypopover from ".";

storiesOf("Accesskeypopover", module).add("default", () => (
  <Accesskeypopover />
));
