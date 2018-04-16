// libs
import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";
import Grid from "material-ui/Grid";

// src
import styles from "./GalleryImage.css";

export default class GalleryImage extends Component {
  state = { status: "loading" };

  handleImageLoaded = () => {
    this.setState({ status: "loaded" });
  };

  handleImageErrored = () => {
    this.setState({ status: "failed" });
  };

  render() {
    const { image, title } = this.props;
    const { status } = this.state;
    const opacity = status === "loaded" ? 1 : 0;
    const height = status === "loaded" ? "auto" : "50%";
    const minHeight = status === "loaded" ? "auto" : window.innerHeight / 1.7;

    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        className={styles.root}
        style={{ minHeight }}
      >
        <img
          src={image}
          alt={title}
          className={styles.image}
          style={{ opacity, height }}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
        {status === "loading" ? (
          <div className={styles.loadingView}>
            <CircularProgress color="inherit" />
          </div>
        ) : status === "failed" ? (
          <div className={styles.blankSlate}>
            Failed to load image resource.
          </div>
        ) : null}
      </Grid>
    );
  }
}
