import React from "react";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode";
import EmojiObjects from "@material-ui/icons/EmojiObjectsOutlined";
import Grid from "@material-ui/core/Grid";
import { StaticImage } from "gatsby-plugin-image";
import Tooltip from "@reach/tooltip";

import DevIcon from "../Icons/Dev";
import EmailIcon from "../Icons/Email";
import GithubIcon from "../Icons/Github";
import StackoverflowIcon from "../Icons/Stackoverflow";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";
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

export const About = () => (
  <section className={styles.root}>
    <h1 className={styles.title}>Muhammad Ali</h1>
    <h2 className={styles.tagline}>
      Software Engineer aiming to build a brand.
    </h2>
    <div className={styles.social}>
      {SOCIAL_LINKS.map(({ title, IconComponent, url }) => {
        return (
          <Tooltip key={title} label={title}>
            <a
              className="iconButton"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent className={styles.socialIcon} />
            </a>
          </Tooltip>
        );
      })}
    </div>
    <Grid container spacing={2} className={styles.justifyCenter}>
      <Grid item xs={4} sm={3} md={2}>
        <StaticImage
          alt="Muhammad Ali"
          className={styles.profilePic}
          draggable={false}
          src="../../../static/images/profile.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <p className={styles.bio}>
          I was into computers since I was in high school. I thought some day
          I’ll create one of these cool games myself but it turned out I’m
          aligning some “Submit” button to the right of a form. Still, I think
          I’m a natural programmer. I don’t want to brag about it but I think
          I’m doing a great job in it. Whenever I face some problem, I’m always
          thinking about the solution. Recently I had a dream about merging two
          arrays without using a third one and I’m not kidding. I can’t stand
          code smell. Whenever I write or see some hacks in project which I’m
          working on I get horrible nightmares. My motto is:{" "}
          <span className={styles.textPrimary}>
            Always code as if the guy who ends up maintaining your code will be
            a violent psychopath who knows where you live.
          </span>
        </p>
      </Grid>
    </Grid>
    <Grid
      container
      spacing={2}
      className={[styles.justifyCenter, styles.spacing].join(" ")}
    >
      <Grid item xs={12} sm={4} md={3} className={styles.item}>
        <ChromeReaderMode className={styles.itemIcon} />
        <h3 className={styles.itemTitle}>Education</h3>
        <h4 className={styles.itemSubtitle}>BS in Software Engineering</h4>
        <p className={styles.itemContent}>
          COMSATS Institute of Information Technology,
          <br /> Islamabad, Pakistan
        </p>
      </Grid>
      <Grid item xs={12} sm={4} md={3} className={styles.item}>
        <BusinessCenter className={styles.itemIcon} />
        <h3 className={styles.itemTitle}>Experience</h3>
        <h4 className={styles.itemSubtitle}>Sr. Software Engineer - Emumba</h4>
        <p className={styles.itemContent}>June 2017 - Present</p>
      </Grid>
      <Grid item xs={12} sm={4} md={3} className={styles.item}>
        <EmojiObjects className={styles.itemIcon} />
        <h3 className={styles.itemTitle}>Technical Skills</h3>
        <h4 className={styles.itemSubtitle}>Javascript / Typescript</h4>
        <p className={styles.itemContent}>
          React, React Native, Redux Toolkit, Jest, NextJS, Gatsby, NodeJS,
          Formik, AgGrid, Webpack, Micro FEs
        </p>
      </Grid>
    </Grid>
  </section>
);
