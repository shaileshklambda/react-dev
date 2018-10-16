import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/actionMain";
import styles from "./index.module.css";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      body: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = e.target[0].value;
    const message = e.target[1].value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    e.target[0].value = null;
    e.target[1].value = null;
    this.props.dispatch(addPost(data));
  };
  render() {
    return (
      <div className={styles.post_container}>
        <h2 className={styles.post_heading}>Create Post</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            required
            type="text"
            placeholder="Enter Post Title"
          />

          <textarea
            className="form-control"
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
