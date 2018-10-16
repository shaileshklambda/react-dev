import React from "react";
import renderer from "react-test-renderer";
import Debuggertab from "./index.js";

it("Debuggertab: default", () => {
  const component = renderer.create(<Debuggertab />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
