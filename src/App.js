// libs
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Redirect, Router, Route, Switch } from 'react-router'

// src
import { PageAlexaSkills, PageHome } from './components'

const theme = createMuiTheme({ palette: { type: 'dark' } })

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={createHistory()}>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/alexa/:skill" component={PageAlexaSkills} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}
