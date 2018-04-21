// libs
import React from 'react'
import Grid from 'material-ui/Grid'

// src
import Project from './Project'
import styles from './Projects.css'

export default ({ projects, onProjectClick }) => (
  <Grid container spacing={24} className={styles.list}>
    {projects.map(({ isHidden, ...project }, index) => (
      <Grid
        key={index}
        className={[styles.listItem, isHidden && styles.hidden].join(' ')}
        item
        xs={6}
        sm={6}
        md={4}
      >
        <Project
          project={project}
          onProjectClick={onProjectClick.bind(this, index)}
        />
      </Grid>
    ))}
  </Grid>
)
