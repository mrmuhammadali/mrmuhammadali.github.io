// libs
import React, { Component } from "react";
import Grid from "material-ui/Grid";

// src
import { CATEGORIES, PROJECTS } from "./data";
import Categories from "./Categories";
import ProjectDialog from "../ProjectDialog";
import Projects from "./Projects";
import styles from "./Portfolio.css";
import Title from "../Title";

export default class Portfolio extends Component {
  state = { activeCategory: 0, activeProject: -1, projects: PROJECTS };

  handleCategoryClick = index => {
    const category = CATEGORIES[index];
    const projects =
      index === 0
        ? PROJECTS
        : PROJECTS.map(
            project =>
              project.category === category
                ? { ...project, isHidden: false }
                : { ...project, isHidden: true }
          );
    this.setState({ activeCategory: index, projects });
  };

  handleProjectClick = index => {
    this.setState({ activeProject: index });
  };

  handleCloseClick = () => {
    this.setState({ activeProject: -1 });
  };

  render() {
    const { activeCategory, activeProject, projects } = this.state;

    return (
      <section className={styles.root}>
        <Title className={styles.title} content="My Portfolio" />
        <Grid container spacing={24} className={styles.inner}>
          <Grid item xs={4} sm={2}>
            <h2 className={styles.heading}>Type of Work</h2>
            <Categories
              activeCategory={activeCategory}
              onCategoryClick={this.handleCategoryClick}
            />
          </Grid>
          <Grid item xs={10} sm={8}>
            <Projects
              projects={projects}
              onProjectClick={this.handleProjectClick}
            />
          </Grid>
        </Grid>
        {activeProject > -1 && (
          <ProjectDialog
            activeProject={activeProject}
            projects={projects}
            onCloseClick={this.handleCloseClick}
          />
        )}
      </section>
    );
  }
}
