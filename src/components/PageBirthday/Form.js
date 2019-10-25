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
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '2px',
        }}
      >
        <input
          type="phone"
          placeholder="Phone"
          name="phone"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Service Provider"
          name="serviceProvider"
          className={styles.input}
        />
      </div>
      <textarea
        placeholder="Your Message for Fizza"
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
