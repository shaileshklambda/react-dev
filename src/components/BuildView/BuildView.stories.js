import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Buildview from ".";

storiesOf("Buildview", module).add("default", () => <Buildview />);
