import React from "react";
import renderer from "react-test-renderer";
import Analyticstab from ".";

it("Analyticstab: default", () => {
  const component = renderer.create(<Analyticstab />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
