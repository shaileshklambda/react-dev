import React from "react";
import renderer from "react-test-renderer";
import Accesskeypopover from ".";

it("Accesskeypopover: default", () => {
  const component = renderer.create(<Accesskeypopover />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
