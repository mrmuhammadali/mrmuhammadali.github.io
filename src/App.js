// libs
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

// src
import { PageHome } from './components/PageHome'
import { useTheme } from './utils/useTheme'

export const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Route exact path="/">
          <PageHome />
        </Route>
      </HashRouter>
    </ThemeProvider>
  )
}
