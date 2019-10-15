// libs
import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './ProjectCard.styles'

export const ProjectCard = props => {
  const { category, description, image, title } = props
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const classes = useStyles()
  const onLoad = () => {
    setIsLoading(false)
    setError(false)
  }
  const onError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={category} avatar={<div />} />
      <div className={classes.media}>
        {!error && (
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
            component="img"
            onLoad={onLoad}
            onError={onError}
          />
        )}
        {isLoading && <Skeleton variant="rect" className={classes.loading} />}
        {error && (
          <Typography color="textSecondary">
            {'Failed to load image'}
          </Typography>
        )}
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
