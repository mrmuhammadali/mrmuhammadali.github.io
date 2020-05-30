// libs
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'

// src
import { useStyles } from './ProjectCard.styles'

export const ProjectCard = (props) => {
  const { category, description, image, title, urls } = props
  const styles = useStyles()

  return (
    <Card className={styles.root}>
      <CardHeader title={title} subheader={category} avatar={<div />} />
      <div className={styles.media}>
        {typeof image === 'string' ? (
          <CardMedia
            className={styles.media}
            src={image}
            title={title}
            component="img"
            loading="lazy"
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
