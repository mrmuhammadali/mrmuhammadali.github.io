// libs
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

// src
import Details from './Details'
import GalleryImage from './GalleryImage'
import styles from './ProjectDialog.module.css'

export default class ProjectDialog extends Component {
  state = {
    shownProjects: [],
    activeIndex: -1,
  }

  componentDidMount() {
    const { activeProject, projects } = this.props
    const shownProjects = projects.filter(({ isHidden }) => !isHidden)
    const activeIndex = shownProjects.findIndex(
      project => project === projects[activeProject],
    )
    this.setState(() => ({ shownProjects, activeIndex }))
  }

  handleNextClick = index => {
    this.setState(() => ({ activeIndex: index + 1 }))
  }

  handlePreviousClick = index => {
    this.setState(() => ({ activeIndex: index - 1 }))
  }

  render() {
    const { onCloseClick } = this.props
    const { activeIndex, shownProjects } = this.state
    const { title, image, description } = shownProjects[activeIndex] || {}

    return (
      <Dialog classes={{ paper: styles.root }} open onClose={onCloseClick}>
        <Grid container spacing={24} className={styles.grid}>
          <GalleryImage
            image={image}
            title={title}
          />
          <Grid item xs={12} sm={12} md={5}>
            <Details
              activeIndex={activeIndex}
              steps={shownProjects.length}
              title={title}
              description={description}
              onNextClick={() => this.handleNextClick(activeIndex)}
              onPreviousClick={() => this.handlePreviousClick(activeIndex)}
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
