// libs
import React, { forwardRef } from 'react'
import Grid from '@material-ui/core/Grid'

// src
import { PROJECTS } from './data'
import { ProjectCard } from '../ProjectCard'
import { Title } from '../Title'
import { useStyles } from './Portfolio.styles'

export const Portfolio = forwardRef((_, ref) => {
  const styles = useStyles()

  return (
    <section className={styles.root} ref={ref}>
      <Title>My Portfolio</Title>
      <Grid container className={styles.content}>
        <Grid item xs={11} sm={12} md={10} lg={11}>
          <Grid container className={styles.content} spacing={2}>
            {PROJECTS.map(project => {
              const { category, description, thumbnail, title, urls } = project
              return (
                <Grid key={title} item xs={12} sm={6} md={4} lg={3}>
                  <ProjectCard
                    category={category}
                    description={description}
                    image={thumbnail}
                    title={title}
                    urls={urls}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
})
