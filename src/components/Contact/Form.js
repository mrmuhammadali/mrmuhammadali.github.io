// libs
import React from 'react'
import Button from 'material-ui/Button'

// src
import styles from './Form.css'

export default () => (
  <form
    className={styles.root}
    method="POST"
    action="https://formspree.io/mr.muhammad.ali@live.com"
  >
    <p>
      <input type="text" placeholder="Full Name" name="name" required />
    </p>
    <p>
      <input
        type="email"
        placeholder="Email Address"
        name="_replyto"
        required
      />
    </p>
    <p>
      <textarea
        placeholder="Your Message"
        name="message"
        rows="10"
        cols="40"
        required
      />
    </p>
    <p>
      <Button className={styles.submit} type="submit">
        Send Message
      </Button>
    </p>
  </form>
)
