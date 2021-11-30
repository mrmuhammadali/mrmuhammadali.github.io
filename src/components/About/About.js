import React, { forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import DevIcon from "../Icons/Dev";
import EmailIcon from "../Icons/Email";
import GithubIcon from "../Icons/Github";
import StackoverflowIcon from "../Icons/Stackoverflow";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";
import Detail from "./Detail";
import { Profile } from "./Profile";
import * as styles from "./About.module.css";

const SOCIAL_LINKS = [
  {
    title: "mr.muhammad.ali@live.com",
    IconComponent: EmailIcon,
    url: "mailto:mr.muhammad.ali@live.com",
  },
  {
    title: "LinkedIn",
    IconComponent: LinkedInIcon,
    url: "https://www.linkedin.com/in/muhammadalidev/",
  },
  {
    title: "Github",
    IconComponent: GithubIcon,
    url: "https://github.com/mrmuhammadali/",
  },
  {
    title: "Stackoverflow",
    IconComponent: StackoverflowIcon,
    url: "https://stackoverflow.com/users/3527843/muhammad-ali/",
  },
  {
    title: "DEV",
    IconComponent: DevIcon,
    url: "https://dev.to/muhammadali_dev",
  },
  {
    title: "Twitter",
    IconComponent: TwitterIcon,
    url: "https://twitter.com/muhammadalidev",
  },
];

export const About = forwardRef(({ id }, ref) => {
  // const styles = useStyles();

  return (
    <section id={id} className={styles.root} ref={ref}>
      <h1 className={styles.title}>Muhammad Ali</h1>
      <h2 className={styles.tagline}>
        Software Engineer aiming to build a brand.
      </h2>
      <div className={styles.social}>
        {SOCIAL_LINKS.map(({ title, IconComponent, url }) => {
          return (
            <Tooltip key={title} title={title} enterDelay={100}>
              <IconButton href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent className={styles.socialIcon} />
              </IconButton>
            </Tooltip>
          );
        })}
      </div>
      <Profile />
      <Detail />
    </section>
  );
});
