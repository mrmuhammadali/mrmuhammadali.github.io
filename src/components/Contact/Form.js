// libs
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// src
import { useStyles } from "./Form.styles";

const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

export const Form = () => {
  const [status, setStatus] = useState("");
  const styles = useStyles({ status });
  const submitForm = (ev) => {
    let timeout = null;
    setStatus("");
    if (timeout) {
      clearTimeout(timeout);
    }
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus(SUCCESS);
        timeout = setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus(ERROR);
      }
    };
    xhr.send(data);
  };

  return (
    <form
      className={styles.root}
      method="POST"
      action="https://formspree.io/xaypowvp"
      onSubmit={submitForm}
    >
      <input
        aria-label="Name"
        type="text"
        placeholder="Full Name"
        name="name"
        className={styles.input}
        required
      />
      <input
        aria-label="Email"
        type="email"
        placeholder="Email Address"
        name="_replyto"
        className={styles.input}
        required
      />
      <textarea
        aria-label="Message"
        placeholder="Your Message"
        name="message"
        rows="8"
        className={styles.input}
        required
      />
      <Typography className={styles.align}>
        {
          {
            [ERROR]: "* Message sending failed.",
            [SUCCESS]: "* Message sent successfully.",
          }[status]
        }
      </Typography>
      <Button className={styles.submit} type="submit">
        Send Message
      </Button>
    </form>
  );
};
