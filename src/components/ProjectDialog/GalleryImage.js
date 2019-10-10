// libs
import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import getOr from 'lodash/fp/getOr'
import Grid from '@material-ui/core/Grid'

// src
import { hasPropChanged } from '../../utils'
import styles from './GalleryImage.module.css'

const INNER_HEIGHT = window.innerHeigh

export default class GalleryImage extends Component {
  state = { status: 'loading' }

  componentWillReceiveProps(nextProps) {
    if (hasPropChanged('image', this.props, nextProps)) {
      this.setState(() => ({ status: 'loading' }))
      const { setImageHeight } = this.props
      setImageHeight(INNER_HEIGHT / 1.5)
    }
  }

  handleImageLoaded = () => {
    this.setState(() => ({ status: 'loaded' }))
    setTimeout(() => {
      const { setImageHeight } = this.props
      setImageHeight(getOr(400, 'imageReference.offsetHeight')(this))
    }, 100)
  }

  handleImageErrored = () => {
    this.setState(() => ({ status: 'failed' }))
    const { setImageHeight } = this.props
    setImageHeight(400)
  }

  render() {
    const { image, title } = this.props
    const { status } = this.state
    const opacity = status === 'loaded' ? 1 : 0
    const height = status === 'loaded' ? 'auto' : 0
    const minHeight = status === 'loaded' ? 'auto' : INNER_HEIGHT / 1.7

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
          ref={ref => (this.imageReference = ref)}
          src={image}
          alt={title}
          className={styles.image}
          style={{ opacity, height }}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
        {status === 'loading' ? (
          <div className={styles.loadingView}>
            <CircularProgress color="inherit" />
          </div>
        ) : status === 'failed' ? (
          <div className={styles.blankSlate}>
            Failed to load image resource.
          </div>
        ) : null}
      </Grid>
    )
  }
}
