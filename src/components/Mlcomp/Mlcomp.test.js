import React from "react";
import renderer from "react-test-renderer";
import Mlcomp from ".";

it("Mlcomp: default", () => {
  let sampleData = {};
  let envInfo = {};
  let chartPref = {};
  const component = renderer.create(
    <Mlcomp sampleData={sampleData} envInfo={envInfo} chartPref={chartPref} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
