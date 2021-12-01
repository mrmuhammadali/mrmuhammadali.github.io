import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Tooltip from "@reach/tooltip";

import BusinessCenter from "../Icons/BusinessCenter";
import ChromeReader from "../Icons/ChromeReader";
import DevIcon from "../Icons/Dev";
import EmailIcon from "../Icons/Email";
import EmojiObjects from "../Icons/EmojiObjects";
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
    <div className={["marginLg", styles.profile].join(" ")}>
      <StaticImage
        alt="Muhammad Ali"
        className={styles.profilePic}
        draggable={false}
        src="../../../static/images/profile.jpg"
      />
      <p className={styles.bio}>
        I was into computers since I was in high school. I thought some day I’ll
        create one of these cool games myself but it turned out I’m aligning
        some “Submit” button to the right of a form. Still, I think I’m a
        natural programmer. I don’t want to brag about it but I think I’m doing
        a great job in it. Whenever I face some problem, I’m always thinking
        about the solution. Recently I had a dream about merging two arrays
        without using a third one and I’m not kidding. I can’t stand code smell.
        Whenever I write or see some hacks in project which I’m working on I get
        horrible nightmares. My motto is:{" "}
        <span className={styles.textPrimary}>
          Always code as if the guy who ends up maintaining your code will be a
          violent psychopath who knows where you live.
        </span>
      </p>
    </div>
    <div className={["marginBase", styles.details].join(" ")}>
      <div className={styles.item}>
        <ChromeReader className={styles.itemIcon} />
        <h3 className={styles.itemTitle}>Education</h3>
        <h4 className={styles.itemSubtitle}>BS in Software Engineering</h4>
        <p className={styles.itemContent}>
          COMSATS Institute of Information Technology,
          <br /> Islamabad, Pakistan
        </p>
      </div>
      <div className={styles.item}>
        <BusinessCenter className={styles.itemIcon} />
        <h3 className={styles.itemTitle}>Experience</h3>
        <h4 className={styles.itemSubtitle}>Sr. Software Engineer - Emumba</h4>
        <p className={styles.itemContent}>June 2017 - Present</p>
      </div>
      <div className={styles.item}>
        <EmojiObjects className={styles.itemIcon} />
        <h3 className={styles.itemTitle}>Technical Skills</h3>
        <h4 className={styles.itemSubtitle}>Javascript / Typescript</h4>
        <p className={styles.itemContent}>
          React, React Native, Redux Toolkit, Jest, NextJS, Gatsby, NodeJS,
          Formik, AgGrid, Webpack, Micro FEs
        </p>
      </div>
    </div>
  </section>
);
