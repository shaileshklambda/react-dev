// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { updatePost } from "../../redux/actions/actionMain";

class Editcomponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = e.target[0].value;
    const newMessage = e.target[1].value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch(updatePost(this.props.post.id, data));
  };
  render() {
    return (
      <div
        key={this.props.post ? this.props.post.id : null}
        className={styles.post}
      >
        <form className={styles.form} onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            defaultValue={this.props.post ? this.props.post.title : null}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            defaultValue={this.props.post ? this.props.post.message : null}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(Editcomponent);
