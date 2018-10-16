import React from "react";
import renderer from "react-test-renderer";
import Buildview from ".";
import { store } from "../../redux/store";

it("Buildview: default", () => {
  const component = renderer.create(<Buildview store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
