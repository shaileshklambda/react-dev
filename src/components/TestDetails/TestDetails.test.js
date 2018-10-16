import React from "react";
import renderer from "react-test-renderer";
import Testdetails from ".";

it("Testdetails: default", () => {
  const component = renderer.create(<Testdetails />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
