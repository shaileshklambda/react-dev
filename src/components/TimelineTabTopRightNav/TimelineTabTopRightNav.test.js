import React from "react";
import renderer from "react-test-renderer";
import Timelinetabtoprightnav from ".";

it("Timelinetabtoprightnav: default", () => {
  const component = renderer.create(<Timelinetabtoprightnav />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
