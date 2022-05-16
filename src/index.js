import React from 'react'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)

// Call make Server
makeServer()

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
