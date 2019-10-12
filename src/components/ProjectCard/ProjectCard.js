// libs
import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

// src
import { useStyles } from './ProjectCard.styles'

export function ProjectCard(props) {
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
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={category}
        avatar={
          <Avatar
            alt={category}
            // src=""
          />
        }
      />
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
          <Typography variant="body2" color="textSecondary" component="p">
            {'Failed to load image'}
          </Typography>
        )}
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {
            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
          }
        </Typography>
      </CardContent>
    </Card>
  )
}
