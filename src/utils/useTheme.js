// libs
import { createMuiTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useMemo } from 'react'

// src
import { dark, light } from '../theme'

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const palette = prefersDarkMode ? dark : light

  return useMemo(
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
}