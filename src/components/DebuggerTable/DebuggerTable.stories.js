import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Debuggertable from ".";

storiesOf("Debuggertable", module).add("default", () => <Debuggertable />);
