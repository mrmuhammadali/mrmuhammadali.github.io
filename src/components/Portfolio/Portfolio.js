// libs
import React, { forwardRef, useState } from 'react'
import Grid from '@material-ui/core/Grid'

// src
import { CATEGORIES, PROJECTS } from './data'
import Categories from './Categories'
// import ProjectDialog from '../ProjectDialog'
import Projects from './Projects'
import styles from './Portfolio.module.css'
import Title from '../Title'

const Portfolio = forwardRef((_, ref) => {
  const [activeCategory, setActiveCategory] = useState(0)
  // const [activeProject, setActiveProject] = useState(-1)
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
    // setActiveProject(index)
  }

  // const handleCloseClick = () => {
  //   setActiveProject(-1)
  // }

  return (
    <section className={styles.root} ref={ref}>
      <Title className={styles.title} content="My Portfolio" />
      <Categories activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
      <Grid container className={styles.inner}>
        <Grid item xs={12} sm={12} md={10}>
          <Projects projects={projects} onProjectClick={handleProjectClick} />
        </Grid>
      </Grid>
      {/* {activeProject > -1 && (
        <ProjectDialog activeProject={activeProject} projects={projects} onCloseClick={handleCloseClick} />
      )} */}
    </section>
  )
})

export default Portfolio
