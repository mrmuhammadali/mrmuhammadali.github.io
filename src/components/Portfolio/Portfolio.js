// libs
import React, { forwardRef, useState } from 'react'
import Grid from '@material-ui/core/Grid'

// src
import { CATEGORIES, PROJECTS } from './data'
import Categories from './Categories'
// import Projects from './Projects'
import { ProjectCard } from '../ProjectCard'
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

  return (
    <section className={styles.root} ref={ref}>
      <Title className={styles.title} content="My Portfolio" />
      <Categories
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <Grid container className={styles.content}>
        <Grid item xs={11} sm={12} md={10} lg={11}>
          <Grid container className={styles.content} spacing={2}>
            {projects.map(project => {
              const { category, description, thumbnail, title } = project
              return (
                <Grid key={title} item xs={12} sm={6} md={4} lg={3}>
                  <ProjectCard
                    category={category}
                    description={description}
                    image={thumbnail}
                    title={title}
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

export default Portfolio
