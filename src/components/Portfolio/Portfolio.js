// libs
import React, { forwardRef, useState } from 'react'
import Grid from '@material-ui/core/Grid'

// src
import { CATEGORIES, PROJECTS } from './data'
import Categories from './Categories'
import ProjectDialog from '../ProjectDialog'
import Projects from './Projects'
import styles from './Portfolio.module.css'
import Title from '../Title'

const Portfolio = forwardRef((_, ref) => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeProject, setActiveProject] = useState(-1)
  const [projects, setProjects] = useState(PROJECTS)

  const handleCategoryClick = index => {
    const category = CATEGORIES[index]
    const projects =
      index === 0
        ? PROJECTS
        : PROJECTS.map(project => ({
            ...project,
            isHidden: project.category !== category,
          }))
    setActiveCategory(index)
    setProjects(projects)
  }

  const handleProjectClick = index => {
    setActiveProject(index)
  }

  const handleCloseClick = () => {
    setActiveProject(-1)
  }

  return (
    <section className={styles.root} ref={ref}>
      <Title className={styles.title} content="My Portfolio" />
      <Grid container spacing={24} className={styles.inner}>
        <Grid item xs={4} sm={2}>
          <h2 className={styles.heading}>Type of Work</h2>
          <Categories activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
        </Grid>
        <Grid item xs={10} sm={8}>
          <Projects projects={projects} onProjectClick={handleProjectClick} />
        </Grid>
      </Grid>
      {activeProject > -1 && (
        <ProjectDialog activeProject={activeProject} projects={projects} onCloseClick={handleCloseClick} />
      )}
    </section>
  )
})

export default Portfolio
