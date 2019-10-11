// libs
import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import MobileStepper from '@material-ui/core/MobileStepper'

// src
import styles from './Details.module.css'

export default props => {
  const {
    activeIndex,
    steps,
    title,
    description,
    onNextClick,
    onPreviousClick,
  } = props

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.description}>{description}</div>
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
