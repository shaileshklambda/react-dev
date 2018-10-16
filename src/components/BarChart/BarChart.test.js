import React from "react";
import renderer from "react-test-renderer";
import Barchart from "./index";

it("Barchart: default", () => {
  const pref = {
    chartData: {},
    chartOptions: {}
  };
  const component = renderer.create(<Barchart pref={pref} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
