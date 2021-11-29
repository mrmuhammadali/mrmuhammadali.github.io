// libs
import React, { useEffect, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

// src
import * as Icons from "../Icons";
import { useStyles } from "./ProjectCard.styles";

export const ProjectCard = (props) => {
  const { category, description, image, title, urls, video } = props;
  const styles = useStyles();
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Card className={styles.root}>
      <CardHeader
        title={title}
        subheader={category}
        avatar={<div />}
        action={urls.map(({ href, type }) => {
          const IconComponent = Icons[type] || Icons.Launch;
          return (
            <Tooltip key={`${title}_${type}`} title={type} enterDelay={100}>
              <IconButton href={href} target="_blank" rel="noopener noreferrer">
                <IconComponent className={styles.icon} />
              </IconButton>
            </Tooltip>
          );
        })}
      />
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
        {!image && <Typography color="textSecondary">{title}</Typography>}
      </div>
      <CardContent className={styles.content}>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
