// libs
import React, { useMemo } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// src
import { PageHome } from './components'

const dark = {
  primary: { main: '#26292e' },
  secondary: { main: '#2f3238' },
  text: { primary: '#fff', secondary: '#8f9299', hint: '#de5e60' },
}
const light = {
  primary: { main: '#fff' },
  secondary: { main: '#eee' },
  text: { primary: '#26292e', secondary: '#888', hint: '#de5e60' },
}

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const palette = prefersDarkMode ? dark : light

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette,
        typography: {
          fontFamily:
            '"Titillium Web", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      }),
    [palette],
  )

  return (
    <ThemeProvider theme={theme}>
      <PageHome />
    </ThemeProvider>
  )
}
