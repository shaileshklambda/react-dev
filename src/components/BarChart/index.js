// @flow
import React from "react";
//import styles from "./index.module.css";
import { Bar } from "react-chartjs-2";

const Barchart = props => (
  <div>
    {props.pref &&
    props.pref.chartData &&
    props.pref.chartOptions &&
    Object.keys(props.pref.chartData).length > 0 &&
    Object.keys(props.pref.chartOptions).length > 0 ? (
      <Bar
        data={props.pref && props.pref.chartData ? props.pref.chartData : null}
        options={
          props.pref && props.pref.chartOptions ? props.pref.chartOptions : null
        }
      />
    ) : null}
  </div>
);

export default Barchart;
