// libs
import React from 'react'
import Helmet from 'react-helmet'
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
          href="http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600,700,900"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <PageHome />
      </ThemeProvider>
    </>
  )
}

export default App
