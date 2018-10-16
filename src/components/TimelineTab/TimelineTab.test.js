import React from "react";
import renderer from "react-test-renderer";
import Timelinetab from ".";
import { store } from "../../redux/store";

it("Timelinetab: default", () => {
  const component = renderer.create(<Timelinetab store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
