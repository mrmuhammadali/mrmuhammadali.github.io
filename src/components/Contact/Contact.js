// libs
import React from "react";
import Grid from "material-ui/Grid";

// src
import Form from "./Form";
import styles from "./Contact.css";
import Title from "../Title";

export default () => (
  <section className={styles.root}>
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
          <li>
            House No. 677, Sector F/1,
            <br />
            Mirpur, Azad Kashmir,
            <br />
            Pakistan
          </li>
        </ul>
      </Grid>
    </Grid>
  </section>
);
