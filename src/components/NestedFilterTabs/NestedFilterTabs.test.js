import React from "react";
import renderer from "react-test-renderer";
import Nestedfiltertabs from ".";

it("Nestedfiltertabs: default", () => {
  const component = renderer.create(<Nestedfiltertabs />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
