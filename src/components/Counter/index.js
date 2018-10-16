// @flow
import React from "react";
import styles from "./index.module.css";
import { Row, Col } from "react-bootstrap";

const Counter = props => (
  <div>
    <Row>
      <Col md={4}>
        <div className={styles.rectangle}>
          <Row>
            <Col md={12}>
              <span className={styles.title}>
                {props.counter && props.counter.title
                  ? props.counter.title
                  : "N/A"}
              </span>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <span className={styles.count}>
                {props.counter && props.counter.count ? props.counter.count : 0}
              </span>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
);

export default Counter;
