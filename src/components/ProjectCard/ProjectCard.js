import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import Tooltip from "@reach/tooltip";

import * as Icons from "../Icons";
import * as styles from "./ProjectCard.module.css";

export const ProjectCard = (props) => {
  const { category, description, image, title, urls, video } = props;
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={[styles.defaultFont, styles.title].join(" ")}>{title}</p>
        <p className={[styles.defaultFont, styles.subtitle].join(" ")}>
          {category}
        </p>
        <div className={styles.actions}>
          {urls.map(({ href, type }) => {
            const IconComponent = Icons[type] || Icons.Launch;
            return (
              <Tooltip key={`${title}_${type}`} label={type}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <IconComponent className={styles.icon} />
                </a>
              </Tooltip>
            );
          })}
        </div>
      </div>
      <div className={styles.media}>
        {video ? (
          <video
            loop
            muted
            aria-label={title}
            preload="none"
            ref={videoRef}
            className={styles.media}
            poster={getSrc(image)}
            src={video}
          />
        ) : (
          image && (
            <GatsbyImage
              className={styles.media}
              image={getImage(image)}
              alt={title}
              draggable={false}
              objectFit="initial"
            />
          )
        )}
        {!image && <p className={styles.mediaTitle}>{title}</p>}
      </div>
      <p className={[styles.defaultFont, styles.description].join(" ")}>
        {description}
      </p>
    </div>
  );
};
