// libs
import React, { useEffect, useRef } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './ProjectCard.styles'

export const ProjectCard = (props) => {
  const { category, description, image, title, urls, video } = props
  const styles = useStyles()
  const videoRef = useRef()
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <Card className={styles.root}>
      <CardHeader title={title} subheader={category} avatar={<div />} />
      <div className={styles.media}>
        {video ? (
          <video
            loop
            muted
            aria-label={title}
            preload="none"
            ref={videoRef}
            className={styles.media}
            poster={image.fluid.src}
            src={video}
          />
        ) : (
          image && (
            <Img
              className={styles.media}
              fluid={image.fluid}
              alt={title}
              draggable={false}
            />
          )
        )}
        {!image && <Typography color="textSecondary">{title}</Typography>}
      </div>
      <CardContent className={styles.content}>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        className={styles.actions}
        style={{ gridTemplateColumns: urls.map(() => 'auto').join(' ') }}
      >
        {urls.map(({ href, type }) => {
          return (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              {type}
            </a>
          )
        })}
      </CardActions>
    </Card>
  )
}
