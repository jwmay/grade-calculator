import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import { SettingsContext } from './SettingsContext'

export const ThemeContextProvider = ({ children }) => {
  const { settings } = React.useContext(SettingsContext)

  const theme = createTheme({
    components: {
      MuiAlert: {
        styleOverrides: {
          message: {
            overflow: 'inherit',
            padding: '8px',
            width: '100%',
          },
        },
      },
    },
    palette: {
      mode: settings.darkMode ? 'dark' : 'light',
      primary: {
        main: green[900],
      },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
