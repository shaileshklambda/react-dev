import React from "react";
import renderer from "react-test-renderer";
import Automationlogstable from "./index.js";

it("Automationlogstable: default", () => {
  const component = renderer.create(<Automationlogstable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
