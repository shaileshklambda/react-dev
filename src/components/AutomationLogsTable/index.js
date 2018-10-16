// @flow
import React from "react";
import styles from "./index.module.css";
import ReactTable from "react-table";
import { Image } from "react-bootstrap";
import {
  dateFormat,
  timeFormat,
  timeDifference,
  buildEnvironmentInfo
} from "../../utility/utilityFunctions";
type Props = {
  data: Object
};

const sortIcon = require("../../images/sort.svg");
const searchIcon = require("../../images/search.svg");
const statusIcon = require("../../images/filter.svg");

const columns = [
  {
    Header: props => {
      return (
        <div className={`${styles.headerCell}`}>
          <span className={`${styles.text} ${styles.font13}`}>DATE</span>
          <span className={`${styles.icon}`}>
            <Image src={sortIcon} />
          </span>
        </div>
      );
    },
    accessor: "date", // String-based value accessors!
    sortable: true,
    Cell: row => {
      return <span>{dateFormat(row.original.date)}</span>;
    }
  },
  {
    Header: props => {
      return (
        <div className={`${styles.headerCell}`}>
          <span className={`${styles.text} ${styles.font13}`}>TEST ID</span>
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
          <span className={`${styles.text} ${styles.font13}`}>BUILD</span>
          <span className={`${styles.icon}`}>
            <Image src={sortIcon} />
          </span>
        </div>
      );
    },
    accessor: "name",
    sortable: true
  },
  {
    Header: props => {
      return (
        <div className={`${styles.headerCell}`}>
          <span className={`${styles.text} ${styles.font13}`}>USERS</span>
        </div>
      );
    },
    accessor: "users",
    sortable: false
  }
];
const Automationlogstable = props => (
  <div>
    {props.data ? (
      <ReactTable
        data={props.data}
        pageSize={props.data.length}
        columns={columns}
        className={`${styles.tableMainContainer}`}
        ResizerComponent={() => <span />}
        showPagination={props.data.length > 10}
      />
    ) : (
      "Invalid Data"
    )}
  </div>
);

export default Automationlogstable;
