// libs
import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

// src
import Form from './Form'
import { Fiverr, Github, Instagram, LinkedIn, Npm } from '../Icons'
import styles from './Contact.css'
import Title from '../Title'

const SOCIAL_LINKS = [
  {
    title: 'Fiverr',
    IconComponent: Fiverr,
    url: 'https://www.fiverr.com/users/ma_webminister/'
  },
  {
    title: 'Github',
    IconComponent: Github,
    url: 'https://github.com/mrmuhammadali/'
  },
  {
    title: 'Instagram',
    IconComponent: Instagram,
    url: 'https://www.instagram.com/muhammadali.io/'
  },
  {
    title: 'LinkedIn',
    IconComponent: LinkedIn,
    url: 'https://www.linkedin.com/in/muhammad-ali-6648b8119/'
  },
  {
    title: 'NPM',
    IconComponent: Npm,
    url: 'https://npmjs.com/~mrmuhammadali'
  }
]

export default ({ setSectionRef }) => (
  <section className={styles.root} ref={setSectionRef}>
    <Title className={styles.title} content="Get in Touch" />
    <Grid container spacing={24} className={styles.inner}>
      <Grid item xs={10} sm={7} md={6}>
        <Form />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <h2 className={styles.heading}>CONTACT DETAILS</h2>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="mailto:mr.muhammad.ali@live.com">
              mr.muhammad.ali@live.com
            </a>
          </li>
          <li>+92 343 5311141</li>
          <li className={styles.social}>
            {SOCIAL_LINKS.map(socialLink => {
              const { title, IconComponent, url } = socialLink

              return (
                <Tooltip title={title} enterDelay={100}>
                  <IconButton href={url} target="_blank">
                    <IconComponent className={styles.icon} />
                  </IconButton>
                </Tooltip>
              )
            })}
          </li>
        </ul>
      </Grid>
    </Grid>
  </section>
)
