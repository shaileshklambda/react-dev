import React from "react";
import renderer from "react-test-renderer";
import Automationpagecontentwrapper from ".";
import { store } from "../../redux/store";

it("Automationpagecontentwrapper: default", () => {
  const component = renderer.create(
    <Automationpagecontentwrapper store={store} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
