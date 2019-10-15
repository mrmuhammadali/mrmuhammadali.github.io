// libs
import React, { forwardRef } from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

// src
import { Form } from './Form'
import { Fiverr, Github, Instagram, LinkedIn, Npm, Twitter } from '../Icons'
import { useStyles } from './Contact.styles'
import { Title } from '../Title'

const SOCIAL_LINKS = [
  {
    title: 'Fiverr',
    IconComponent: Fiverr,
    url: 'https://www.fiverr.com/users/ma_webminister/',
  },
  {
    title: 'Github',
    IconComponent: Github,
    url: 'https://github.com/mrmuhammadali/',
  },
  {
    title: 'Instagram',
    IconComponent: Instagram,
    url: 'https://www.instagram.com/muhammadali.io/',
  },
  {
    title: 'LinkedIn',
    IconComponent: LinkedIn,
    url: 'https://www.linkedin.com/in/muhammad-ali-6648b8119/',
  },
  {
    title: 'NPM',
    IconComponent: Npm,
    url: 'https://npmjs.com/~mrmuhammadali',
  },
  {
    title: 'Twitter',
    IconComponent: Twitter,
    url: 'https://twitter.com/muhammadali_io',
  },
]

export const Contact = forwardRef((_, ref) => {
  const styles = useStyles()

  return (
    <section className={styles.root} ref={ref}>
      <Title className={styles.title}>Get in Touch</Title>
      <Grid container spacing={2} className={styles.content}>
        <Grid item xs={12} sm={4} md={2} className={styles.contact}>
          <Typography className={styles.contactHeading} component="h2">
            CONTACT DETAILS
          </Typography>
          <a className={styles.email} href="mailto:mr.muhammad.ali@live.com">
            mr.muhammad.ali@live.com
          </a>
          <p className={styles.phone}>+92 343 5311141</p>
          <div className={styles.social}>
            {SOCIAL_LINKS.map(({ title, IconComponent, url }) => {
              return (
                <Tooltip key={title} title={title} enterDelay={100}>
                  <IconButton href={url} target="_blank">
                    <IconComponent className={styles.icon} />
                  </IconButton>
                </Tooltip>
              )
            })}
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Form />
        </Grid>
      </Grid>
    </section>
  )
})
