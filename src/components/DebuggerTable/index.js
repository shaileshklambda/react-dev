// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

type Props = {};
type State = {};
class Debuggertable extends Component<Props, State> {
  getTheadGroupPropsb = (state, rowInfo, column, instance) => {
    console.log("state", state);
    console.log("rowInfo", rowInfo);
    console.log("column", column);
    console.log("instance", instance);
    return {
      className: `${styles.moinakTest}`
    };
  };

  render() {
    const { data } = this.props;

    // Header Definitions and Configurations
    if (data) {
      const testColumns = [
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className="pull-left">Name</span>
              </div>
            );
          },
          accessor: "name",
          width: 100
        },
        {
          Header: props => {
            // String-based value accessors!
            return (
              <div className={`${styles.headerCell}`}>
                <span className="pull-left">Status</span>
              </div>
            );
          },
          accessor: "status",
          width: 60
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className="pull-left">Method</span>
              </div>
            );
          },
          accessor: "method",
          width: 60
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className="pull-left">Type</span>
              </div>
            );
          },
          accessor: "type"
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className="pull-left">Size</span>
              </div>
            );
          },
          accessor: "size"
        },
        {
          Header: props => {
            // Required because our accessor is not a string
            return (
              <div className={`${styles.headerCell}`}>
                <span className="pull-left">Duration</span>
              </div>
            );
          },
          accessor: "duration"
        }
      ]; // Required because our accessor is not a string

      // React Table Return
      return (
        <ReactTable
          data={data}
          columns={testColumns}
          className={"-striped -highlight " + styles.tableStyleCust}
          getTheadGroupProps={this.getTheadGroupPropsb}
          showPagination={false}
          defaultPageSize={5}
          style={{ fontSize: "12px" }}
          sortable={false}
        />
      );
    } else {
      return <div>No Data to display</div>;
    }
  }
}
export default Debuggertable;
