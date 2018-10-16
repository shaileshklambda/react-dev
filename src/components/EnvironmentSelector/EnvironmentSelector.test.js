import React from "react";
import renderer from "react-test-renderer";
import Environmentselector from ".";

it("Environmentselector: default", () => {
  const component = renderer.create(<Environmentselector />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
