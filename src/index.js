// libs
import React from 'react'
import { render } from 'react-dom'

// src
import { App } from './App'
import * as serviceWorker from './utils/serviceWorker'

render(<App />, document.getElementById('root'))
serviceWorker.register()
