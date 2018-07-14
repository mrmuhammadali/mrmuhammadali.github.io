// libs
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

// src
import Details from './Details'
import GalleryImage from './GalleryImage'
import styles from './ProjectDialog.css'

export default class ProjectDialog extends Component {
  state = {
    shownProjects: [],
    activeIndex: -1,
    imageHeight: window.innerHeight / 1.5
  }

  componentDidMount() {
    const { activeProject, projects } = this.props
    const shownProjects = projects.filter(({ isHidden }) => !isHidden)
    const activeIndex = shownProjects.findIndex(
      project => project === projects[activeProject]
    )
    this.setState(() => ({ shownProjects, activeIndex }))
  }

  handleNextClick = index => {
    this.setState(() => ({ activeIndex: index + 1 }))
  }

  handlePreviousClick = index => {
    this.setState(() => ({ activeIndex: index - 1 }))
  }

  setImageHeight = height => {
    this.setState(() => ({ imageHeight: height }))
  }

  render() {
    const { onCloseClick } = this.props
    const { activeIndex, shownProjects, imageHeight } = this.state
    const { title, image } = shownProjects[activeIndex] || {}

    return (
      <Dialog classes={{ paper: styles.root }} open onClose={onCloseClick}>
        <Grid container spacing={24} className={styles.grid}>
          <GalleryImage
            image={image}
            title={title}
            setImageHeight={this.setImageHeight}
          />
          <Grid item xs={12} sm={12} md={5}>
            <Details
              activeIndex={activeIndex}
              steps={shownProjects.length}
              title={title}
              imageHeight={imageHeight}
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
    )
  }
}
