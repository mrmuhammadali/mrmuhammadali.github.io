// libs
import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

// src
import styles from './GalleryImage.module.css'

const INNER_HEIGHT = window.innerHeigh

export default function GalleryImage(props) {
  const { image, title } = props
  const [status, setStatus] = useState('loading')
  const opacity = status === 'loaded' ? 1 : 0
  const height = status === 'loaded' ? 'auto' : 0
  const minHeight = status === 'loaded' ? 'auto' : INNER_HEIGHT / 1.7
  const handleLoad = () => setStatus('loaded')
  const handleError = () => setStatus('failed')

  useEffect(() => {
    setStatus('loading')
  }, [image])

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
        onLoad={handleLoad}
        onError={handleError}
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
