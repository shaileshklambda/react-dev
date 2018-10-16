// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";
import Posts from "../Posts";
import EditComponent from "../EditComponent";
type Props = {};
/*
  For Fetching All Posts
*/
class Allpost extends Component<Props> {
  render() {
    return (
      <div>
        <h1 className={styles.all_post_heading}>All Posts</h1>
        {this.props.posts.postReducer.length > 0
          ? this.props.posts.postReducer.map(post => (
              //Render Edit Components or Add Component
              <div key={post.id}>
                {post.editing ? (
                  <EditComponent post={post} key={post.id} />
                ) : (
                  <Posts post={post} key={post.id} />
                )}
              </div>
            ))
          : null}
      </div>
    );
  }
}
// Map State To Props
const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(Allpost);
