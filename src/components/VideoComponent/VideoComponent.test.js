import React from "react";
import renderer from "react-test-renderer";
import Videocomponent from ".";

it("Videocomponent: default", () => {
  const component = renderer.create(<Videocomponent />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
