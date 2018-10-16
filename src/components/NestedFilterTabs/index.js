// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import "./default.css";
import { Tab, Tabs, Col } from "react-bootstrap";
import Debuggertable from "../DebuggerTable";
type Props = {
  childData: Object,
  parent: String
};
type State = {};
class Nestedfiltertabs extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      key: 0,
      logData: {}
    };
    this.filterData = this.filterData.bind(this);
  }

  // For Filtering Data According to The Type Chosen
  filterData(key) {
    let data = this.props.childData;
    switch (data[key].meta_key) {
      case "info":
        //let type = "info";
        console.log("info");
        //   let filteredData = this.props.callback(type, data, key);
        break;
      case "all":
        console.log("all");
        break;
      case "exception":
        console.log("exception");
        break;
      case "error":
        console.log("error");
        break;
      default:
        console.log("all");
        break;
    }
  }
  // For Initial Stage When No Filtered Applied
  buildDebuggerTable(init) {
    return <Debuggertable data={init} />;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Tabs
          defaultActiveKey={0}
          id="controlled-tab-example"
          className={`${styles.net_tab} activeNested`}
          onSelect={this.filterData}
        >
          {this.props.childData && this.props.childData.data
            ? this.props.childData.tab_menu.child_tabs.map((item, index) => {
                return (
                  <Tab
                    eventKey={index}
                    key={"tab_" + index}
                    title={item.menu_name ? item.menu_name : "N/A"}
                    data-key={item.meta_key}
                  >
                    {item
                      ? this.buildDebuggerTable(this.props.childData.data)
                      : "No Data In table"}
                  </Tab>
                );
              })
            : null}
        </Tabs>
      </div>
    );
  }
}

export default Nestedfiltertabs;
