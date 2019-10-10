// libs
import React from 'react'
import { render } from 'react-dom'

// src
import { App } from './App'
import { registerServiceWorker } from './utils'

render(<App />, document.getElementById('root'))
registerServiceWorker()
