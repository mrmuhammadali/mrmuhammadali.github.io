// libs
import React from 'react'
import Button from '@material-ui/core/Button'

// src
import { useStyles } from './Form.styles'

export const Form = () => {
  const styles = useStyles()

  return (
    <form
      className={styles.root}
      method="POST"
      action="https://formspree.io/mr.muhammad.ali@live.com"
    >
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        className={styles.input}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        name="_replyto"
        className={styles.input}
        required
      />
      <textarea
        placeholder="Your Message"
        name="message"
        rows="8"
        className={styles.input}
        required
      />
      <Button className={styles.submit} type="submit">
        Send Message
      </Button>
    </form>
  )
}
