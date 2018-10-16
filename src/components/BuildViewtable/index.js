// @flow
import React from "react";
import styles from "./index.module.css";
import ReactTable from "react-table";
import { Image } from "react-bootstrap";
import EnvIcons from "../EnvIcons";
import "react-table/react-table.css";
import _ from "lodash";
import {
  dateFormat,
  timeFormat,
  timeDifference,
  buildEnvironmentInfo
} from "../../utility/utilityFunctions";

type Props = {};
type States = {};
const sortIcon = require("../../images/sort.svg");
const searchIcon = require("../../images/search.svg");
const statusIcon = require("../../images/filter.svg");

const testColumns = [
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
          <span className={`${styles.text} ${styles.font13}`}>TEST ID</span>
          <span className={`${styles.icon}`}>
            <Image src={searchIcon} />
          </span>
        </div>
      );
    },
    accessor: "id",
    width: 220,
    sortable: false
  },
  {
    Header: props => {
      return (
        <div className={`${styles.headerCell}`}>
          <span className={`${styles.text} ${styles.font13}`}>ENVIRONMENT</span>
          <span className={`${styles.icon}`}>
            <Image src={sortIcon} />
          </span>
        </div>
      );
    },
    accessor: "environment",
    width: 275,
    sortable: true,
    Cell: row => {
      return (
        <span>
          {
            <EnvIcons
              envInfo={
                row.original.environment
                  ? buildEnvironmentInfo(row.original.environment)
                  : null
              }
            />
          }
        </span>
      );
    }
  },
  {
    Header: props => {
      return (
        <div className={`${styles.headerCell}`}>
          <span className={`${styles.text} ${styles.font13}`}>START TIME</span>
        </div>
      );
    },
    accessor: "startedAt",
    sortable: false,
    Cell: row => {
      return <span>{timeFormat(row.original.startedAt)}</span>;
    }
  },
  {
    Header: props => {
      return (
        <div className={`${styles.headerCell}`}>
          <span className={`${styles.text} ${styles.font13}`}>DURATION</span>
        </div>
      );
    },
    accessor: "startedAt",
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
          <span className={`${styles.text} ${styles.font13}`}>STATUS</span>
          <span className={`${styles.icon}`}>
            <Image src={statusIcon} />
          </span>
        </div>
      );
    },
    accessor: "status",
    sortable: true,
    Cell: row => {
      return <span>{_.capitalize(row.original.status)}</span>;
    }
  }
];

const BuildViewtable = props => (
  <div>
    {props.data && props.data.tests ? (
      <ReactTable
        data={props.data.tests}
        pageSize={props.data.tests.length}
        columns={testColumns}
        className={`${styles.tableMainContainer}`}
        ResizerComponent={() => <span />}
        showPagination={props.data.tests.length > 10}
      />
    ) : (
      "Invalid Data"
    )}
  </div>
);

export default BuildViewtable;
