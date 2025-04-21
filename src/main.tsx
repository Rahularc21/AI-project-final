import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'

// Ensure the root element exists
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

// Create root and render app
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
