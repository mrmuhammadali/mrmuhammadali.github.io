// libs
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@material-ui/core/styles'

// src
import { PageHome } from '../components/PageHome'
import { useTheme } from '../utils/useTheme'

const App = () => {
  const theme = useTheme()
  return (
    <>
      <Helmet>
        <title>Muhammad Ali</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <PageHome />
      </ThemeProvider>
    </>
  )
}

export default App
