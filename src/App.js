// libs
import React from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from '@material-ui/core/styles'

// src
import { PageBirthday } from './components/PageBirthday'
import { PageHome } from './components/PageHome'
import { useTheme } from './utils/useTheme'

export const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageHome path="/" />
        <PageBirthday path="/fizzas-birthday" />
      </Router>
    </ThemeProvider>
  )
}
