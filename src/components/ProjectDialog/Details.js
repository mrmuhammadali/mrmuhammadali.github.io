// libs
import React from 'react'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import MobileStepper from 'material-ui/MobileStepper'

// src
import { DESCRIPTIONS } from '../Portfolio/data'
import styles from './Details.css'

export default props => {
  const {
    activeIndex,
    steps,
    title,
    imageHeight,
    onNextClick,
    onPreviousClick
  } = props

  return (
    <div className={styles.root} style={{ maxHeight: imageHeight }}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.description}>{DESCRIPTIONS[activeIndex]}</div>
      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeIndex}
        classes={{ root: styles.stepper, dotActive: styles.stepperActiveDot }}
        nextButton={
          <Button
            size="small"
            onClick={onNextClick}
            disabled={activeIndex === steps - 1}
          >
            Next
            <Icon>keyboard_arrow_right</Icon>
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={onPreviousClick}
            disabled={activeIndex === 0}
          >
            <Icon>keyboard_arrow_left</Icon>
            Previous
          </Button>
        }
      />
    </div>
  )
}
