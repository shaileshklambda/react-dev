import React from "react";
import renderer from "react-test-renderer";
import Debuggertable from ".";

it("Debuggertable: default", () => {
  const component = renderer.create(<Debuggertable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
