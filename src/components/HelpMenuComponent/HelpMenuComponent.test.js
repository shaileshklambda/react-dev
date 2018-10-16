import React from "react";
import renderer from "react-test-renderer";
import Helpmenucomponent from ".";

it("Helpmenucomponent: default", () => {
  const component = renderer.create(<Helpmenucomponent />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
