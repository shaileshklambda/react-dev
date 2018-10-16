import React from "react";
import renderer from "react-test-renderer";
import Timelinetable from ".";

it("Timelinetable: default", () => {
  const component = renderer.create(<Timelinetable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
