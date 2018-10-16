import React from "react";
import renderer from "react-test-renderer";
import Counter from "./index.js";

it("Counter: default", () => {
  const component = renderer.create(<Counter />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
