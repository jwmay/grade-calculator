import React from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { SettingsContextProvider } from './contexts/SettingsContext'
import Main from './components/Main'

export default function App() {
  return (
    <SettingsContextProvider>
      <ThemeContextProvider>
        <CssBaseline />
        <Main />
      </ThemeContextProvider>
    </SettingsContextProvider>
  )
}
