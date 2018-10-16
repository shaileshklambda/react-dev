import React from "react";
import renderer from "react-test-renderer";
import Automationpagemaincontent from ".";
import { store } from "../../redux/store";

it("Automationpagemaincontent: default", () => {
  const component = renderer.create(
    <Automationpagemaincontent store={store} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
