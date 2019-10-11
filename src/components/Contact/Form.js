// libs
import React from 'react'
import Button from '@material-ui/core/Button'

// src
import styles from './Form.module.css'

export default () => (
  <form
    className={styles.root}
    method="POST"
    action="https://formspree.io/mr.muhammad.ali@live.com"
  >
    <input type="text" placeholder="Full Name" name="name" required />
    <input
      type="email"
      placeholder="Email Address"
      name="_replyto"
      required
    />
    <textarea
      placeholder="Your Message"
      name="message"
      rows="8"
      required
    />
    <Button className={styles.submit} type="submit">
      Send Message
    </Button>
  </form>
)
