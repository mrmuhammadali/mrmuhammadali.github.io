// libs
import React from 'react'
import { Route } from 'react-router'

const PageAlexaSkillsInner = ({ skill }) => {
  return (
    <React.Fragment>
      <Route exact path="/alexa/tweet-it" component={() => 'Tweet It'} />
      <Route exact path="/alexa/onepad" component={() => 'Onepad'} />
    </React.Fragment>
  )
}

export default PageAlexaSkillsInner
