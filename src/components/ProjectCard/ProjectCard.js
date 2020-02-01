// libs
import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './ProjectCard.styles'

export const ProjectCard = props => {
  const { category, description, image, title, urls } = props
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const styles = useStyles()
  const onLoad = () => {
    setIsLoading(false)
    setError(false)
  }
  const onError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <Card className={styles.root}>
      <CardHeader title={title} subheader={category} avatar={<div />} />
      <div className={styles.media}>
        {!error && (
          <CardMedia
            className={styles.media}
            src={image}
            title={title}
            component="img"
            loading="lazy"
            onLoad={onLoad}
            onError={onError}
            onDragStart={e => e.preventDefault()}
          />
        )}
        {isLoading && <Skeleton variant="rect" className={styles.loading} />}
        {error && <Typography color="textSecondary">{title}</Typography>}
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
