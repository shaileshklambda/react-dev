// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import "./default.css";
import { Tabs, Tab, Col } from "react-bootstrap";
import NestedFilterTabs from "../NestedFilterTabs";
import { FaDownload } from "react-icons/fa";
type Props = {
  props: Object
};

type State = {};
class Debuggertab extends Component<Props, State> {
  state: State = {
    parentData: this.props.parent,
    currentTabData: this.props.innerContent
  };
  componentDidMount() {
    this.setState({ updatedProps: this.props });
  }
  componentWillReceiveProps() {}

  // Parent Local Function For Filtering
  filter(type, data, key) {
    //init filterdataobject
    // let filtered_data = [];
    // data[0].data.tests.map((item, index) => {
    //   if (item.log_type === type) {
    //     filtered_data.push(item);
    //   }
    // });
    // let result = {
    //   status: "success",
    //   type: type,
    //   tests: filtered_data
    // };
  }
  render() {
    //console.log(this.props.parent);
    return (
      <Col xs={12} md={12} className={styles.colAdjust}>
        <div className={styles.Debuggertab}>
          {
            // Parent Debugger Tabs
            <Tabs
              defaultActiveKey={3}
              id="uncontrolled-tab-example"
              className={`${styles.bug_list_tab} activeParent`}
            >
              {this.props.data
                ? this.props.parent.parent_name.map((item, index) => {
                    // switch (index) {
                    //   case 1:
                    //     return (
                    //       <Tab
                    //         eventKey={index}
                    //         key={"tab_" + index}
                    //         title={item.tab_name ? item.tab_name : "N/A"}
                    //       >
                    //         {item.child_tabs ? (
                    //           <NestedFilterTabs
                    //             childData={item.child_tabs}
                    //             parent={item.tab_name}
                    //             callback={this.filter}
                    //           />
                    //         ) : (
                    //           "Nothing Here"
                    //         )}
                    //       </Tab>
                    //     );
                    //     break;
                    //   case 2:
                    //     break;
                    //   case 3:
                    //     return (
                    //       <Tab
                    //         eventKey={index}
                    //         key={"tab_" + index}
                    //         title={item.tab_name ? item.tab_name : "N/A"}
                    //       >
                    //         {item.child_tabs ? (
                    //           <NestedFilterTabs
                    //             childData={item.child_tabs}
                    //             parent={item.tab_name}
                    //             callback={this.filter}
                    //           />
                    //         ) : (
                    //           "Nothing Here"
                    //         )}
                    //       </Tab>
                    //     );
                    //     break;
                    //   case 6:
                    //     return (
                    //       <Tab
                    //         eventKey={index}
                    //         key={"tab_" + index}
                    //         title={item.tab_name ? <FaDownload /> : "N/A"}
                    //       >
                    //         {item.child_tabs ? (
                    //           <NestedFilterTabs
                    //             childData={item.child_tabs}
                    //             parent={item.tab_name}
                    //           />
                    //         ) : (
                    //           "Nothing Here"
                    //         )}
                    //       </Tab>
                    //     );
                    //     break;
                    //   default:
                    //     return (
                    //       <Tab
                    //         eventKey={index}
                    //         key={"tab_" + index}
                    //         title={item.tab_name ? item.tab_name : "N/A"}
                    //       >
                    //         {item.child_tabs ? (
                    //           <NestedFilterTabs
                    //             childData={item.child_tabs}
                    //             parent={item.tab_name}
                    //             callback={this.filter}
                    //           />
                    //         ) : (
                    //           "Nothing Here"
                    //         )}
                    //       </Tab>
                    //     );
                    //     break;
                    // }
                    if (index === 6) {
                      return (
                        <Tab
                          eventKey={index}
                          key={"tab_" + index}
                          title={item.tab_name ? <FaDownload /> : "N/A"}
                        >
                          {item.child_tabs ? (
                            <NestedFilterTabs
                              innerContent={this.props.innerContent}
                              childTabs={this.props.parent}
                              parent={item.tab_name}
                            />
                          ) : (
                            "Nothing Here"
                          )}
                        </Tab>
                      );
                    } else {
                      //Children Tabs For Network
                      return (
                        <Tab
                          eventKey={index}
                          key={"tab_" + index}
                          title={item.tab_name ? item.tab_name : "N/A"}
                        >
                          {item.child_tabs ? (
                            <NestedFilterTabs
                              childData={this.props}
                              callback={this.filter}
                            />
                          ) : (
                            "Nothing Here"
                          )}
                        </Tab>
                      );
                    }
                  })
                : null}
            </Tabs>
          }
        </div>
      </Col>
    );
  }
}

export default Debuggertab;
