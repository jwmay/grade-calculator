import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import { SettingsContext } from '../contexts/SettingsContext'

export default function ModeButton() {
  const { settings, setSetting } = React.useContext(SettingsContext)

  const darkMode = settings.darkMode

  const handleClick = () => {
    setSetting('darkMode', !darkMode)
  }

  return (
    <Tooltip title={`Enable ${darkMode ? 'light' : 'dark'} mode`}>
      <IconButton color='inherit' onClick={handleClick} size='large'>
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  )
}
