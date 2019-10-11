// @flow
// libs
import React from 'react'

// src
import { CATEGORIES } from './data'
import styles from './Categories.module.css'

type Props = {
  activeCategory: number,
  onCategoryClick: number => void,
}

export default ({ activeCategory, onCategoryClick }: Props) => (
  <div className={styles.root}>
    {CATEGORIES.map((category, index) => (
      <span
        key={index}
        className={[
          styles.listItem,
          activeCategory === index && styles.active,
        ].join(' ')}
        onClick={() => onCategoryClick(index)}
      >
        {category}
      </span>
    ))}
  </div>
)
