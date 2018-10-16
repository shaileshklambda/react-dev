// @flow
import React, { Component } from "react";
import videojs from "video.js";
import "../../../node_modules/video.js/dist/video-js.css";
import "./videojsSkin.css";
//import styles from "./index.module.css";
//import * as HLS from "videojs-contrib-hls";

export default class VideoComponent extends Component {
  componentDidMount() {
    // instantiate Video.js
    if (this.videoNode) {
      this.player = videojs(
        this.videoNode,
        this.props,
        function onPlayerReady() {
          console.log("onPlayerReady", this);
        }
      );
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className={"video-js vjs-big-play-centered"}
            poster=""
          />
        </div>
      </div>
    );
  }
}
