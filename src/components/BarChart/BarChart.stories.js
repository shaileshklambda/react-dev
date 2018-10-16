import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Barchart from "./index.js";
import {
  DefaultTheme,
  MagicLeapTheme,
  WithGridLines,
  ChartWithOptions
} from "./storybook_data/BarChartData";

storiesOf("Barchart", module).add("Default Theme", () => (
  <Barchart pref={DefaultTheme} />
));
storiesOf("Barchart", module).add("Magic Leap Theme", () => (
  <Barchart pref={MagicLeapTheme} />
));
storiesOf("Barchart", module).add("With Grid Lines", () => (
  <Barchart pref={WithGridLines} />
));
