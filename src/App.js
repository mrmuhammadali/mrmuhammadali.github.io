// libs
import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

// src
import { PageHome } from './components'

const theme = createMuiTheme({ palette: { type: 'dark' } })

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <PageHome />
    </MuiThemeProvider>
  )
}
