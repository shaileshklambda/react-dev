import React from "react";
import renderer from "react-test-renderer";
import Automationlogstab from ".";

it("Automationlogstab: default", () => {
  const component = renderer.create(<Automationlogstab />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
