// libs
import React from 'react'
import getOr from 'lodash/fp/getOr'

// src
import PageAlexaSkillsInner from './PageAlexaSkillsInner'
import { parseQueryString } from '../../utils'

export default class PageAlexaSkills extends React.Component {
  render() {
    const skill = getOr('', 'match.params.skill')(this.props)
    const query = getOr('', 'location.search')(this.props)
    const locale = getOr('en-US', 'locale')(parseQueryString(query))

    return <PageAlexaSkillsInner skill={skill} locale={locale} />
  }
}
