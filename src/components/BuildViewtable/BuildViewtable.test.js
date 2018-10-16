import React from "react";
import renderer from "react-test-renderer";
import Buildtable from "./index.js";

it("Buildtable: default", () => {
  const component = renderer.create(<Buildtable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
