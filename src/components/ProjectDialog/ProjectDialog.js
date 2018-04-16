// libs
import React, { Component } from "react";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";

// src
import Details from "./Details";
import GalleryImage from "./GalleryImage";
import styles from "./ProjectDialog.css";

export default class ProjectDialog extends Component {
  state = { shownProjects: [], activeIndex: -1 };

  componentDidMount() {
    const { activeProject, projects } = this.props;
    const shownProjects = projects.filter(({ isHidden }) => !isHidden);
    const activeIndex = shownProjects.findIndex(
      project => project === projects[activeProject]
    );
    this.setState({ shownProjects, activeIndex });
  }

  handleNextClick = index => {
    this.setState({ activeIndex: index + 1 });
  };

  handlePreviousClick = index => {
    this.setState({ activeIndex: index - 1 });
  };

  render() {
    const { onCloseClick } = this.props;
    const { activeIndex, shownProjects } = this.state;
    const { title, image } = shownProjects[activeIndex] || {};

    return (
      <Dialog classes={{ paper: styles.root }} open onClose={onCloseClick}>
        <Grid container spacing={24} justify="center">
          <GalleryImage image={image} title={title} />
          <Grid item xs={12} sm={12} md={5}>
            <Details
              activeIndex={activeIndex}
              steps={shownProjects.length}
              title={title}
              onNextClick={this.handleNextClick.bind(this, activeIndex)}
              onPreviousClick={this.handlePreviousClick.bind(this, activeIndex)}
            />
          </Grid>
          <div className={styles.closeButton}>
            <Button color="inherit" onClick={onCloseClick}>
              <Icon>clear</Icon>
            </Button>
          </div>
        </Grid>
      </Dialog>
    );
  }
}
