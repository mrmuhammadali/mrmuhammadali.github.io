// libs
import React, { forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

// src
import { Form } from "./Form";
import DevIcon from "../Icons/Dev";
import GithubIcon from "../Icons/Github";
import StackoverflowIcon from "../Icons/Stackoverflow";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";
import UpworkIcon from "../Icons/Upwork";
import { Title } from "../Title";
import { useStyles } from "./Contact.styles";

const SOCIAL_LINKS = [
  {
    title: "DEV",
    IconComponent: DevIcon,
    url: "https://dev.to/muhammadali_dev",
  },
  {
    title: "Github",
    IconComponent: GithubIcon,
    url: "https://github.com/mrmuhammadali/",
  },
  {
    title: "Stackoverflow",
    IconComponent: StackoverflowIcon,
    url: "https://www.instagram.com/muhammadali.dev/",
  },
  {
    title: "LinkedIn",
    IconComponent: LinkedInIcon,
    url: "https://www.linkedin.com/in/muhammad-ali-6648b8119/",
  },
  {
    title: "Twitter",
    IconComponent: TwitterIcon,
    url: "https://twitter.com/muhammadali_io",
  },
  {
    title: "Upwork",
    IconComponent: UpworkIcon,
    url: "https://upwork.com/o/profiles/users/~01ed6257c1b4e8228d/",
  },
];

export const Contact = forwardRef(({ id }, ref) => {
  const styles = useStyles();

  return (
    <section id={id} className={styles.root} ref={ref}>
      <Title>Get in Touch</Title>
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
                  <IconButton
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className={styles.icon} />
                  </IconButton>
                </Tooltip>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Form />
        </Grid>
      </Grid>
    </section>
  );
});
