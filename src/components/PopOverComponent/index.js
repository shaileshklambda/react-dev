// @flow
import React from "react";
import styles from "./index.module.css";
import {
  Popover,
  Row,
  Col,
  OverlayTrigger,
  FormControl,
  InputGroup,
  ControlLabel,
  FormGroup,
  Image
} from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

const accessKeyIcon = require("../../images/access-key.svg");
const helpIcon = require("../../images/help-center.svg");

const popoverBottom = props => (
  <Popover id="popover-positioned-bottom" className={styles.help_popover}>
    {props.pref && props.pref.data && props.pref.data.menus
      ? props.pref.data.menus.map((item, index) => {
          let className = item.className;
          return (
            <div className={styles[className]} key={"cont_" + index}>
              <h4 className={styles.menuHead} key={"menu_title" + index}>
                {item.title}
              </h4>
              <ul key={"ul_" + index}>
                <Row>
                  {item.items.map((menu, menu_index) => {
                    return (
                      <Col key={"col_" + menu_index} md={item.childCol}>
                        <li key={"menu_item" + menu_index}>
                          <a href="/">{menu}</a>
                        </li>
                      </Col>
                    );
                  })}
                </Row>
              </ul>
              <hr />
            </div>
          );
        })
      : null}
  </Popover>
);
const popoverAccessForm = props => (
  <Popover id="popover-positioned-bottom" className={styles.basic}>
    {props.pref && props.pref.data ? (
      <div>
        <h5 className={styles.menuHead}>Enter Password To Get Access Key</h5>
        <br />
        <form className={styles.access_key_form}>
          <FormGroup>
            <Row>
              <Col md={3}>
                <ControlLabel className={styles.labelClass}>
                  Username
                </ControlLabel>
              </Col>
              <Col md={5}>
                <InputGroup>
                  <FormControl
                    type="text"
                    value={
                      props.pref.data.username ? props.pref.data.username : null
                    }
                    className={styles.inputField}
                    readOnly
                  />
                  <InputGroup.Addon className={styles.accessGroupAddon}>
                    <div>
                      <CopyToClipboard text={props.pref.data.username}>
                        <button
                          type="button"
                          className={
                            styles.copyBtn +
                            " copy-clipboard " +
                            styles.btnTitle
                          }
                        >
                          COPY
                        </button>
                      </CopyToClipboard>
                    </div>
                  </InputGroup.Addon>
                </InputGroup>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={3}>
                <ControlLabel className={styles.labelClass}>
                  Password
                </ControlLabel>
              </Col>
              <Col md={3}>
                <InputGroup>
                  <FormControl
                    type="password"
                    value={
                      props.pref.data.password ? props.pref.data.password : null
                    }
                    onChange={() => {}}
                  />
                  <InputGroup.Addon className={styles.accessGroupAddonActive}>
                    <div>
                      <button
                        type="button"
                        className={styles.submitBtn + " " + styles.btnTitle}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </InputGroup.Addon>
                </InputGroup>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={3}>
                <ControlLabel className={styles.labelClass}>
                  Access Key
                </ControlLabel>
              </Col>
              <Col md={5}>
                <InputGroup>
                  <FormControl
                    type="password"
                    value={
                      props.pref.data.access_key
                        ? props.pref.data.access_key
                        : null
                    }
                    readOnly
                    onChange={() => {}}
                  />

                  <InputGroup.Addon className={styles.accessGroupAddon}>
                    <div>
                      <CopyToClipboard text={props.pref.data.access_key}>
                        <button
                          type="button"
                          className={
                            styles.copyBtn +
                            " copy-clipboard " +
                            styles.btnTitle
                          }
                        >
                          COPY
                        </button>
                      </CopyToClipboard>
                    </div>
                  </InputGroup.Addon>
                </InputGroup>
              </Col>
            </Row>
          </FormGroup>
        </form>
      </div>
    ) : null}
  </Popover>
);

function buildComponent(props) {
  if (props.pref && props.pref.type) {
    switch (props.pref.type) {
      case "help_menu":
        return (
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popoverBottom(props)}
          >
            <Image src={helpIcon} width={25} height={20} />
          </OverlayTrigger>
        );
      // break;
      case "access_key":
        return (
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popoverAccessForm(props)}
          >
            <Image src={accessKeyIcon} width={25} height={20} />
          </OverlayTrigger>
        );

      //  break;

      default:
        console.log("No Type Supplied");
        break;
    }
  } else {
    console.log("Sorry Invalid Type");
  }
}
const PopOverComponent = props => <div>{buildComponent(props)}</div>;

export default PopOverComponent;
