// @flow
import React, { Component } from "react";

import { Image } from "react-bootstrap";

import ReactTable from "react-table";
import "react-table/react-table.css";

import styles from "./index.module.css";

import {
  dateFormat,
  timeFormat,
  timeDifference
} from "../../utility/utilityFunctions";

const sortIcon = require("../../images/sort.svg");
const searchIcon = require("../../images/search.svg");
const statusIcon = require("../../images/filter.svg");

class TimelineTable extends Component {
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

    if (data && data[0] && data[0].tests) {
      const testColumns = [
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className={`${styles.text} ${styles.font13}`}>Date</span>
                <span className={`${styles.icon}`}>
                  <Image src={sortIcon} />
                </span>
              </div>
            );
          },
          accessor: "startedAt", // String-based value accessors!
          sortable: true,
          Cell: row => {
            return <span>{dateFormat(row.original.startedAt)}</span>;
          }
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className={`${styles.text} ${styles.font13}`}>
                  Test ID
                </span>
                <span className={`${styles.icon}`}>
                  <Image src={searchIcon} />
                </span>
              </div>
            );
          },
          accessor: "id",
          sortable: false
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className={`${styles.text} ${styles.font13}`}>
                  Start Time
                </span>
                <span className={`${styles.icon}`}>
                  <Image src={sortIcon} />
                </span>
              </div>
            );
          },
          accessor: "startedAt",
          sortable: true,
          Cell: row => {
            return <span>{timeFormat(row.original.startedAt)}</span>;
          }
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className={`${styles.text} ${styles.font13}`}>
                  Duration
                </span>
              </div>
            );
          },
          accessor: "endedAt",
          sortable: false,
          Cell: row => {
            return (
              <span>
                {timeDifference(row.original.startedAt, row.original.endedAt)}
              </span>
            );
          }
        },
        {
          Header: props => {
            return (
              <div className={`${styles.headerCell}`}>
                <span className={`${styles.text} ${styles.font13}`}>
                  Status
                </span>
                <span className={`${styles.icon}`}>
                  <Image src={statusIcon} />
                </span>
              </div>
            );
          }, // Required because our accessor is not a string
          accessor: "status",
          sortable: false
        }
      ];

      return (
        <ReactTable
          data={data[0].tests}
          pageSize={10}
          columns={testColumns}
          className={`${styles.tableMainContainer}`}
          ResizerComponent={() => <span />}
        />
      );
    } else {
      return <div>No Data to display</div>;
    }
  }
}

export default TimelineTable;
