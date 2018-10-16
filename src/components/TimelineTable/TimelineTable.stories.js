import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Timelinetable from ".";

storiesOf("Timelinetable", module).add("default", () => <Timelinetable />);
