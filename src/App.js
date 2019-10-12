// libs
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

// src
import { PageHome } from './components'

const theme = createMuiTheme({
  palette: { type: 'dark' },
  colors: { primaryBackground: '#26292e', primaryText: '#fff' },
})

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <PageHome />
    </MuiThemeProvider>
  )
}
