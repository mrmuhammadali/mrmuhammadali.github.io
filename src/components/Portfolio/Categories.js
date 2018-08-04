// @flow
// libs
import React from 'react'

// src
import { CATEGORIES } from './data'
import styles from './Categories.css'

type Props = {
  activeCategory: number,
  onCategoryClick: number => void
}

export default ({ activeCategory, onCategoryClick }: Props) => (
  <ul className={styles.root}>
    {CATEGORIES.map((category, index) => (
      <li
        key={index}
        className={[
          styles.listItem,
          activeCategory === index && styles.active
        ].join(' ')}
        onClick={() => onCategoryClick(index)}
      >
        {category}
      </li>
    ))}
  </ul>
)
